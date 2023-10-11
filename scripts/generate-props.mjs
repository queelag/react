import { appendFile, readFile, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

const GENERICS = new Map([
  ['AriaMenuElement', ['AriaMenuItemElement']],
  ['AriaListBoxElement', ['AriaListBoxOptionElement']],
  ['AriaComboBoxElement', ['AriaComboBoxOptionElement']],
  ['ButtonGroupElement', ['T', 'ButtonElementAttributes']],
  ['NavigationBarElement', ['T', 'NavigationBarItemElementAttributes']],
  ['NavigationRailElement', ['T', 'NavigationRailItemElementAttributes']],
  ['SelectElement', ['SelectOptionElement']],
  ['MenuElement', ['MenuItemElement']]
])

await writeFile('src/definitions/props.ts', `import type { ElementComponentProps } from './types.js'`)

for (let path of await glob('node_modules/@aracna/web-components/elements/{aria,data,feedback,input,layout,navigation,surface}/*-element.js')) {
  let folder, name, dts, elements, ts

  folder = path.replace('node_modules/@aracna/web-components/elements/', '').split('/')[0]
  name = path.replace('node_modules/@aracna/web-components/elements/', '').split('/')[1].replace('.js', '')

  dts = await readFile(path.replace('.js', '.d.ts'), 'utf8')
  elements = dts.match(/'aracna-[a-z-]+': [a-zA-Z]+/gm).map((match) => match.split(':')[1].trim())

  ts = /* HTML */ `
    <script>
      import type { ${elements.map((element) => `${element}Attributes, ${element}EventMap`).join(', ')} } from '@aracna/web'
      import type { ${elements.join(', ')} } from '@aracna/web-components/elements/${folder}/${name}'

      ${elements
        .map((element) =>
          [
            `export type ${element.replace('Element', '')}Props`,
            GENERICS.get(element)?.[1] ? `<${GENERICS.get(element)[0]} extends ${GENERICS.get(element)[1]} = ${GENERICS.get(element)[1]}>` : '',
            ` = ElementComponentProps<${element}, ${element}Attributes`,
            GENERICS.has(element) ? `<${GENERICS.get(element)[0]}>` : '',
            `, ${element}EventMap>`
          ].join('')
        )
        .join('\n')}
    </script>
  `

  ts =
    '\n' +
    (await format(ts.replace(/<\/?script>/gm, ''), {
      jsxSingleQuote: true,
      parser: 'babel-ts',
      printWidth: 160,
      semi: false,
      singleQuote: true,
      trailingComma: 'none'
    }))

  await appendFile('src/definitions/props.ts', ts)
}

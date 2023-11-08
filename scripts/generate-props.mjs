import { appendFile, readFile, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

const GENERICS = new Map([
  ['AccordionElement', ['T']],
  ['AriaMenuElement', ['AriaMenuItemElement']],
  ['AriaListBoxElement', ['AriaListBoxOptionElement']],
  ['AriaComboBoxElement', ['AriaComboBoxOptionElement']],
  ['BreadcrumbElement', ['T']],
  ['ButtonGroupElement', ['T']],
  ['CarouselElement', ['T']],
  ['DisclosureElement', ['T']],
  ['FeedElement', ['T']],
  ['FormElement', ['T']],
  ['ListElement', ['T']],
  ['MenuElement', ['MenuItemElement', 'T']],
  ['MenuItemElement', ['T']],
  ['NavigationBarElement', ['T']],
  ['NavigationRailElement', ['T']],
  ['RadioGroupElement', ['T']],
  ['SelectElement', ['SelectOptionElement', 'T']],
  ['SliderElement', ['T']],
  ['TabsElement', ['T']]
])

await writeFile('src/definitions/generated-props.ts', `import type { ElementComponentProps } from './types.js'`)

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
            `export type Aracna${element.replace('Element', '')}Props`,
            GENERICS.get(element)?.[0] === 'T' ? `<T>` : GENERICS.get(element)?.[1] === 'T' ? '<T>' : '',
            ` = ElementComponentProps<${element}, ${element}Attributes`,
            GENERICS.has(element) ? `<${[...GENERICS.get(element)].join(',')}>` : '',
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

  await appendFile('src/definitions/generated-props.ts', ts)
}

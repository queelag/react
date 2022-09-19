import { concatURL } from '@queelag/core'
import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import { readdirSync } from 'fs'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'

const EXTERNAL = ['@queelag/core', '@queelag/web', 'preact', 'preact/compat', 'preact/hooks']
const PLUGINS = [strip({ include: ['src/**/*.ts'], functions: ['[A-Z][a-z]+Logger.(verbose|debug|info)'] }), terser(), typescript()]

const CONFIG = defineConfig({
  external: EXTERNAL,
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    {
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
      format: 'esm'
    }
  ],
  plugins: [...PLUGINS, typescript({ compilerOptions: { declaration: true, declarationDir: 'dist/declarations', emitDeclarationOnly: true } })]
})

const ARIA_COMPONENTS = readdirSync('./src/components/aria').map((name) => ({ dir: 'aria', name: name }))
// const CORE_COMPONENTS = readdirSync('./src/components/core').map((name) => ({ dir: 'core', name: name }))

const COMPONENTS = readdirSync('./src/components', { withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => ({ dir: '', name: dirent.name }))

const COMPONENTS_CONFIGS = [...ARIA_COMPONENTS, ...COMPONENTS].map(({ dir, name }) =>
  defineConfig({
    external: EXTERNAL,
    input: concatURL('src/components', dir, name),
    output: {
      file: concatURL('dist/components', dir, name.replace('.tsx', '.cjs')),
      format: 'cjs'
    },
    plugins: [...PLUGINS, typescript()]
  })
)

export default [CONFIG, ...COMPONENTS_CONFIGS]

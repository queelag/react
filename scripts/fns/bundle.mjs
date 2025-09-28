import { build } from 'esbuild'
import { glob } from 'glob'

/** @type {import('esbuild').BuildOptions} */
const OPTIONS = {
  logLevel: 'info',
  minify: true
}

export async function bundle() {
  return Promise.all([
    /**
     * ESM
     */
    build({
      ...OPTIONS,
      entryPoints: await glob('./src/**/*.{ts,tsx}'),
      format: 'esm',
      outdir: 'dist',
      packages: 'external',
      platform: 'neutral'
    }),
    /**
     * CJS
     */
    build({
      ...OPTIONS,
      bundle: true,
      entryPoints: ['src/index.ts'],
      format: 'cjs',
      outfile: 'dist/index.cjs',
      packages: 'external',
      platform: 'neutral'
    }),
    /**
     * IIFE
     */
    build({
      ...OPTIONS,
      bundle: true,
      entryPoints: ['src/index.ts'],
      format: 'iife',
      globalName: 'AracnaReact',
      outfile: 'dist/index.iife.js',
      platform: 'browser',
      treeShaking: true
    })
  ]).catch(() => process.exit(1))
}

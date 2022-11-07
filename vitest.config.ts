import { preact } from '@preact/preset-vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [preact()],
  test: {
    coverage: {
      exclude: ['src/index.ts'],
      include: ['src/**/*.ts'],
      reporter: ['lcov']
    },
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}']
  }
})

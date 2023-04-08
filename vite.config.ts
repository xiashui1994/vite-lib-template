import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: './lib/main.ts',
      name: 'Counter',
      fileName: 'counter',
    },
  },
})

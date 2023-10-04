import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx',
      },
      output: {
        dir: 'dist',
        entryFileNames: 'script.js',
        chunkFileNames: 'script.js',
        assetFileNames: 'style[extname]',
      },
    },
  },
})

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
        entryFileNames: 'slider.js',
        chunkFileNames: 'slider.js',
        assetFileNames: 'slider[extname]',
      },
    },
  },
})

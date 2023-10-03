import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    output: {
      dir: 'dist',
      entryFileNames: 'script.js',
      chunkFileNames: 'script.js',
      assetFileNames: 'style[extname]',
    },
  },
})

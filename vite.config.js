import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/
// Update 'base' below to match your actual repository name before deploying.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
})

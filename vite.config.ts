import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    svgr({ include: '**/*.svg?react' }),
    react()
  ],
  build: {
    outDir: 'dist'
  },
});
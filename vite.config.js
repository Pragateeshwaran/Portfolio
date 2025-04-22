import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Ensure this is set to 'build'
  },
  base: '/',
  plugins: [react()],
})

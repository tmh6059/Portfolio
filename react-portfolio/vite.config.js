import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tmh6059.github.io",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})

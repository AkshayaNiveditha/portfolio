import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' works for Vercel and for a username.github.io repo.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

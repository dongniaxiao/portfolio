import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// TODO: Change '/portfolio/' to match your GitHub repo name exactly.
// e.g. if your repo is github.com/yourname/my-portfolio, use '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

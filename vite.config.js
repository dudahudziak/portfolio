import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite publicar em qualquer lugar (Vercel, Netlify, GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: './',
});

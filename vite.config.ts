import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@kapwa/ui': '/src/components/kapwa/ui',
    },
  },
  plugins: [react(), tailwindcss()],
});

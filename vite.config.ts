import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@kapwa-design-system': '/src/components/kapwa-design-system',
    },
  },
  plugins: [react(), tailwindcss()],
});

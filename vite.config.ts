import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = import.meta.url;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add aliases for your project here
      '@components': new URL('src/components', __dirname).pathname,
    },
  },
});

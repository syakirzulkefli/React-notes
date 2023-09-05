import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine the current module's directory and use it as the base for aliases
const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add aliases for your project here
      '@components': new URL('src/components', __dirname).pathname,
    },
  },
});

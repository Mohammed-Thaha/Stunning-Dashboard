// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/https://github.com/Mohammed-Thaha/Stunning-Dashboard.git/', // Replace <repository-name> with your GitHub repo name
  plugins: [
    react({
      fastRefresh: false, // Disable Fast Refresh (optional workaround)
    }),
  ],
});

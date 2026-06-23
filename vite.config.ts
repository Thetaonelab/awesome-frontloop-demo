import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// host:true + a fixed port so the app is reachable when it runs inside a
// Frontloop sandbox (the platform expects the dev server on this port).
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
});

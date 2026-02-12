import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // KRITIS: Mendefinisikan process.env sebagai objek kosong untuk mencegah
  // "Uncaught ReferenceError: process is not defined" di browser saat production.
  define: {
    'process.env': {}
  },
  server: {
    host: true
  }
});
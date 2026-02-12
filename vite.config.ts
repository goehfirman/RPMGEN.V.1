import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Cast process to any to avoid "Property 'cwd' does not exist on type 'Process'" error
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Polyfill process.env with the loaded environment variables as an object literal.
      // This allows access to process.env.API_KEY or process.env.VITE_GEMINI_API_KEY
      // while also preventing "process is not defined" errors.
      'process.env': JSON.stringify(env)
    },
    server: {
      host: true
    }
  };
});
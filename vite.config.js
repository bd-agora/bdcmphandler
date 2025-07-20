import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  }
});
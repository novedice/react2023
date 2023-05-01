///<reference types='vitest' />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text', 'html'],
      exclude: [
        'src/.{ts,tsx}',
        'src/types.ts',
        'src/enums.ts',
        'src/components/single-card/constants.ts',
        'src/mocks/handlers.ts',
        'node_modules/',
        'src/assets',
      ],
    },
  },
});

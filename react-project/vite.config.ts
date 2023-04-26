///<reference types='vitest' />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: false,
      include: ['src//'],
      exclude: [
        'src/.{ts,tsx}',
        'src/types.ts',
        'src/enums.ts',
        'src/components/single-card/constants.ts',
        'src/mocks/handlers.ts',
      ],
    },
  },
});

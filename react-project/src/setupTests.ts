import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from './mocks/server';
import { apiSlice } from './api-requests/apiSlice';
import setupStore from './store/store';

const store = setupStore({});

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => {
  server.resetHandlers();
  store.dispatch(apiSlice.util.resetApiState());
  cleanup();
});

afterAll(() => server.close());

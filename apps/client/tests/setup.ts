import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// @ts-ignore
global.ResizeObserver = require('resize-observer-polyfill');

afterEach(() => {
  cleanup();
});

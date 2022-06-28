import { type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'firefox',
    baseURL: 'http://localhost:3000',
  },
  testDir: './e2e',
};
export default config;

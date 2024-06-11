import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  workers: 4,
  retries: 0,
  timeout: 60 * 10000,
  fullyParallel: true,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: false,
      },
    ],
  ],
  use: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
    headless: true,
    testIdAttribute: 'data-testid',
    screenshot: { mode: 'only-on-failure', fullPage: true },
    trace: 'on-first-retry',
    actionTimeout: 10 * 1000,
  },
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        permissions: ['clipboard-read', 'clipboard-write'],
      },
      testDir: 'tests',
    },
  ],
});
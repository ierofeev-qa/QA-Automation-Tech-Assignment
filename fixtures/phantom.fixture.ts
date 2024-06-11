import { test as base } from '@playwright/test';
import {BrowserContext, chromium} from '@playwright/test';
import path from 'path';

export const test = base.extend<{
  context: BrowserContext;
}>({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, '../.phantom-extension');
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await context.waitForEvent('page');
    await use(context);
    await context.close();
  },
});
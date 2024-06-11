import { Locator, Page, test } from '@playwright/test';

export default class Input {
  page: Page;
  locator: Locator;
  name: string;

  constructor(page: Page, inputLocator: Locator, name: string = '') {
    this.page = page;
    this.locator = inputLocator;
    this.name = name;
  }

  async click (): Promise<void> {
    await test.step(`Click in '${this.name}' input`, async () => {
      await this.locator.click();
    });
  }

  async fill(value: string): Promise<void> {
    await test.step(`Fill '${this.name}' input with '${value}' value`, async () => {
      await this.locator.fill(value);
    });
  }
}

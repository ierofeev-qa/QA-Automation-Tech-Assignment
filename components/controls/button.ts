import { type Locator, type Page, test } from '@playwright/test';

export default class Button {
  page: Page;
  locator: Locator;
  name: string;

  constructor (page: Page, buttonLocator: Locator, name: string = '') {
    this.page = page;
    this.locator = buttonLocator;
    this.name = name;
  }

  async click (): Promise<void> {
    await test.step(`Click on '${this.name}' button`, async () => {
      await this.locator.click();
    });
  }
}

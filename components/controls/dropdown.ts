import { Locator, Page, test } from '@playwright/test';
export default class Dropdown {
  page: Page;
  openButtonLocator: Locator;
  name: string;

  constructor(
    page: Page,
    openButtonLocator: Locator,
    name: string = '',
  ) {
    this.page = page;
    this.name = name;
    this.openButtonLocator = openButtonLocator;
  }

  async selectItem(itemName: string): Promise<void> {
    await test.step(`Choose '${itemName}' item in '${this.name}' dropdown`, async () => {
      await this.openButtonLocator.selectOption(itemName);
    });
  }
}

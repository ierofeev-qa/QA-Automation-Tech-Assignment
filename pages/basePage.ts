import { type Page, test } from '@playwright/test';
import { TEST_INSTANCES } from 'config/instances';

export default abstract class BasePage {
  page: Page;
  rootUrl: string;
  relUrl: string;

  protected constructor (
    page: Page,
    relUrl: string = '',
  ) {
    this.page = page;
    this.rootUrl = process.env.ENV ? TEST_INSTANCES[process.env.ENV] : 'sandbox';
    this.relUrl = relUrl;
  }

  get fullUrl (): string {
    return `${this.rootUrl}${this.relUrl}`;
  }

  async view (): Promise<void> {
    await test.step(`Load page: ${this.fullUrl}`, async () => {
      await this.page.goto(this.fullUrl);
    });
  }

  async waitForState(state: 'load' | 'networkidle' | 'domcontentloaded' = 'load'): Promise<void> {
    await test.step(`Wait for "${state}" page state`, async () => {
      await this.page.waitForLoadState(state);
    });
  }
}

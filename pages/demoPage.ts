import { type Page, type Locator, expect } from '@playwright/test';
import BasePage from 'pages/basePage';
import Button from 'components/controls/button';
import AuthDialog from 'components/authDialog';
import process from 'node:process';
import Dropdown from 'components/controls/dropdown';
import Input from 'components/controls/input';
import PurchaseDialog from 'components/purchaseDialog';

export default class DemoPage extends BasePage {
  locatorConnectNewTabButton: Locator;
  locatorLogoutButton: Locator;
  locatorNetworkSelectButton: Locator;
  locatorItemImage: Locator;
  locatorPurchaseInput: Locator;
  locatorPurchaseSubmitButton: Locator;

  constructor (page: Page) {
    super(page, '/demo/');

    this.locatorConnectNewTabButton = this.page.locator('#connect-tab');
    this.locatorLogoutButton = this.page.locator('#logout');
    this.locatorNetworkSelectButton = this.page.locator('#blockchain');
    this.locatorItemImage = this.page.locator('img');
    this.locatorPurchaseInput = this.page.locator('#purchase-image-url');
    this.locatorPurchaseSubmitButton = this.page.locator('#purchase');
  }

  get connectNewTabButton (): Button {
    return new Button(this.page, this.locatorConnectNewTabButton, 'Connect in new tab');
  }

  get networkDropdown (): Dropdown {
    return new Dropdown(this.page, this.locatorNetworkSelectButton, 'Network select');
  }

  get purchaseInput (): Input {
    return new Input(this.page, this.locatorPurchaseInput, 'Purchase');
  }

  get purchaseSubmitButton (): Button {
    return new Button(this.page, this.locatorPurchaseSubmitButton, 'Purchase sumbit');
  }

  get purchaseDialog (): PurchaseDialog {
    return new PurchaseDialog(this.page);
  }

  async connectByNewTab (login: string = '', password: string = ''): Promise<void> {
    await this.connectNewTabButton.click();
    const secondPage = await this.page.context().waitForEvent('page');
    const authDialog = new AuthDialog(secondPage);
    await authDialog.loginByEmail(login, password);
    await expect(this.locatorLogoutButton).toHaveText(`Logout(${process.env.TEST_USER})`);
  }
}

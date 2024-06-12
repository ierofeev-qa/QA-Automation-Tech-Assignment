import { FrameLocator, type Locator, type Page } from '@playwright/test';
import Button from 'components/controls/button';

export default class PurchaseDialog {
  page: Page;
  locatorIframe: FrameLocator;
  locatorConnectWalletButton: Locator;
  locatorBuyButton: Locator;
  locatorPhantomWalletButton: Locator;
  locatorOkButton: Locator;
  locatorCircleImage: Locator;

  constructor (page: Page,) {
    this.page = page;

    this.locatorIframe = this.page.frameLocator('[allow="payment"]');
    this.locatorConnectWalletButton = this.locatorIframe.getByTestId('payrow');
    this.locatorBuyButton = this.locatorIframe.locator('//*[text()="Buy"]//parent::button');
    this.locatorPhantomWalletButton = this.locatorIframe.locator('//*[@alt="Phantom"]//parent::div');
    this.locatorOkButton = this.locatorIframe.locator('//*[text()="OK"]//parent::button');
    this.locatorCircleImage = this.locatorIframe.getByTestId('circle-check');
  }

  get connectWalletButton (): Button {
    return new Button(this.page, this.locatorConnectWalletButton, 'Connect wallet');
  }

  get buyButton (): Button {
    return new Button(this.page, this.locatorBuyButton, 'Buy');
  }

  get phantomWalletButton (): Button {
    return new Button(this.page, this.locatorPhantomWalletButton, 'Phantom connect');
  }

  get okButton (): Button {
    return new Button(this.page, this.locatorOkButton, 'OK');
  }
}

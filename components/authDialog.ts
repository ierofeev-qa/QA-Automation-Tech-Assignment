import { type Locator, type Page, test } from '@playwright/test';
import Button from 'components/controls/button';
import Input from 'components/controls/input';
import {copyTextToClipboard, pasteFromClipboardByHotkey} from 'helpers/browser.hepler';

export default class AuthDialog {
  page: Page;
  locatorEmailInput: Locator;
  locatorSubmitButton: Locator;
  locatorCodeInput: Locator;

  constructor (page: Page) {
    this.page = page;
    this.locatorEmailInput = this.page.getByTestId('email-form-email-input');
    this.locatorSubmitButton = this.page.getByTestId('email-form-submit-button');
    this.locatorCodeInput = this.page.getByTestId('verify-email-form-code-input');
  }

  get submitButton (): Button {
    return new Button(this.page, this.locatorSubmitButton, 'Submit');
  }

  get emailInput (): Input {
    return new Input(this.page, this.locatorEmailInput, 'Email');
  }

  async loginByEmail (email: string, code: string): Promise<void> {
    await test.step('Login by email', async () => {
      await this.emailInput.fill(email);
      await this.submitButton.click();
      await copyTextToClipboard(this.page, code);
      await this.locatorCodeInput.waitFor({ state: 'visible' });
      await pasteFromClipboardByHotkey(this.page);
    });
  }
}

import {type Page, type Locator, test, expect} from '@playwright/test';
import BasePage from 'pages/basePage';
import Button from 'components/controls/button';
import Input from 'components/controls/input';
import {copyTextToClipboard, pasteFromClipboardByHotkey} from 'helpers/browser.hepler';
import {waitForElementState} from 'helpers/elements.helper';

export default class PhantomPage extends BasePage {
  locatorImportWalletButton: Locator;
  locatorImportSecretPhraseButton: Locator;
  locatorSecretPhraseInput: Locator;
  locatorSubmitSecretButton: Locator;
  locatorViewAccountsButton: Locator;
  locatorPasswordInput: Locator;
  locatorConfirmPasswordInput: Locator;
  locatorTermsOfUseCheckbox: Locator;
  locatorUnderstoodButton: Locator;

  locatorBurgerMenuButton: Locator;
  locatorSettingsButton: Locator;
  locatorDeveloperSettingsButton: Locator;
  locatorTestnetToggle: Locator;

  locatorConnectButton: Locator;
  locatorOnboardingForm: Locator;

  constructor(page: Page) {
    super(page);

    this.locatorImportWalletButton = this.page.getByTestId('import-wallet-button');
    this.locatorImportSecretPhraseButton = this.page.getByTestId('import-seed-phrase-button');
    this.locatorSecretPhraseInput = this.page.getByTestId('secret-recovery-phrase-word-input-0');
    this.locatorSubmitSecretButton = this.page.getByTestId('onboarding-form-submit-button');
    this.locatorViewAccountsButton = this.page.getByTestId('onboarding-form-secondary-button');
    this.locatorPasswordInput = this.page.getByTestId('onboarding-form-password-input');
    this.locatorConfirmPasswordInput = this.page.getByTestId('onboarding-form-confirm-password-input');
    this.locatorTermsOfUseCheckbox = this.page.getByTestId('onboarding-form-terms-of-service-checkbox');
    this.locatorUnderstoodButton = this.page.getByTestId('primary-button');

    this.locatorBurgerMenuButton = this.page.getByTestId('settings-menu-open-button');
    this.locatorSettingsButton = this.page.getByTestId('sidebar_menu-button-settings');
    this.locatorDeveloperSettingsButton = this.page.getByTestId('settings-item-developer-settings');
    this.locatorTestnetToggle = this.page.getByTestId('toggleTestNetwork');

    this.locatorConnectButton = this.page.getByTestId('primary-button');
    this.locatorOnboardingForm = this.page.getByTestId('onboarding-form');
  }

  get fullUrl(): string {
    return 'chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/popup.html';
  }

  get importWalletButton(): Button {
    return new Button(this.page, this.locatorImportWalletButton, 'Import Wallet');
  }

  get importSecretPhraseButton(): Button {
    return new Button(this.page, this.locatorImportSecretPhraseButton, 'Import via secret phrase');
  }

  get secretPhraseInput(): Input {
    return new Input(this.page, this.locatorSecretPhraseInput, 'Secret phrase');
  }

  get submitSecretButton(): Button {
    return new Button(this.page, this.locatorSubmitSecretButton, 'Submit secret phrase');
  }

  async login() {
    await this.importWalletButton.click();
  }

  get passwordInput(): Input {
    return new Input(this.page, this.locatorPasswordInput, 'Password');
  }

  get confirmPasswordInput(): Input {
    return new Input(this.page, this.locatorConfirmPasswordInput, 'Confirm password');
  }

  get understoodButton(): Button {
    return new Button(this.page, this.locatorUnderstoodButton, 'Understood');
  }

  get burgerMenuButton(): Button {
    return new Button(this.page, this.locatorBurgerMenuButton, 'Burger menu');
  }

  get settingsButton(): Button {
    return new Button(this.page, this.locatorSettingsButton, 'Settings');
  }

  get developerSettingsButton(): Button {
    return new Button(this.page, this.locatorDeveloperSettingsButton, 'Developer settings');
  }

  get testnetToggle(): Button {
    return new Button(this.page, this.locatorTestnetToggle, 'Testnet');
  }

  get connectButton(): Button {
    return new Button(this.page, this.locatorConnectButton, 'Connect');
  }

  async connectWallet(secretPhrase: string, password: string) {
    await test.step('Connect Phantom wallet', async () => {
      await this.importWalletButton.click();
      await this.importSecretPhraseButton.click();
      await this.secretPhraseInput.click();
      await copyTextToClipboard(this.page, secretPhrase);
      await pasteFromClipboardByHotkey(this.page);
      await this.submitSecretButton.click();
      await waitForElementState(this.locatorViewAccountsButton, 'visible');
      await this.submitSecretButton.click();
      await this.passwordInput.fill(password);
      await this.confirmPasswordInput.fill(password);
      await this.locatorTermsOfUseCheckbox.click();
      await this.submitSecretButton.click();
      await expect(this.locatorOnboardingForm).toContainText("You're all done!");
    });
  };

  async selectTestnetMode(): Promise<void> {
    await test.step('Select Phantom testnet mode', async () => {
      await this.understoodButton.click();
      await this.burgerMenuButton.click();
      await this.settingsButton.click();
      await this.developerSettingsButton.click();
      await this.testnetToggle.click();
    });
  }
}

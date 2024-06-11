import {expect} from '@playwright/test';
import {test} from 'fixtures/phantom.fixture';
import DemoPage from "pages/demoPage";
import PhantomPage from 'pages/phantomPage';
import {getElementAttributeValue, waitForElementState} from 'helpers/elements.helper';
import {TEST_INSTANCES} from 'config/instances';

test('transaction', async ({ context }) => {
  const firstTab = context.pages()[0];
  const secondTab = context.pages()[1];
  let phantomPage = new PhantomPage(secondTab);

  await test.step('Connect Phantom wallet via extension', async () => {
    await phantomPage.connectWallet(process.env.PHANTOM_SECRET, process.env.PHANTOM_PASSWORD);
    await phantomPage.view();
    await phantomPage.selectTestnetMode();
    await secondTab.close();
  });

  await test.step('Create transaction', async () => {
    const demoPage = new DemoPage(firstTab);
    await demoPage.view();
    await demoPage.waitForState('networkidle');

    await demoPage.connectByNewTab(process.env.TEST_EMAIL, process.env.TEST_CODE);

    await demoPage.networkDropdown.selectItem('Solana');
    const itemRelUrl = await getElementAttributeValue(demoPage.locatorItemImage, 'src');
    const itemFullUrl = `${TEST_INSTANCES[process.env.ENV]}${itemRelUrl}`;
    await demoPage.purchaseInput.fill(itemFullUrl);
    await demoPage.purchaseSubmitButton.click();
    await demoPage.purchaseDialog.connectWalletButton.click();
    await demoPage.purchaseDialog.phantomWalletButton.click();

    await context.waitForEvent('page');
    let popup = context.pages()[1];
    phantomPage = new PhantomPage(popup);
    await phantomPage.connectButton.click();
    await demoPage.purchaseDialog.buyButton.click();
    await context.waitForEvent('page');

    popup = context.pages()[1];
    phantomPage = new PhantomPage(popup);
    await phantomPage.connectButton.click();

    await waitForElementState(demoPage.purchaseDialog.locatorOkButton, 'visible');
    await expect(demoPage.purchaseDialog.locatorOkButton, 'Expect OK button to be enabled').toBeEnabled();
    await demoPage.purchaseDialog.okButton.click();
  });
});

import {Page, test} from '@playwright/test';

async function copyTextToClipboard(page: Page, text: string) {
  await test.step(`Copy "${text}" text to clipboard`, async () => {
    await page.evaluate(async (text: string) => { await navigator.clipboard.writeText(text); }, text);
  });
}

async function pasteFromClipboardByHotkey(page: Page) {
  await test.step('Paste text from clipboard by hotkey', async () => {
    await page.keyboard.press('Control+V');
  });
}

export { copyTextToClipboard, pasteFromClipboardByHotkey };

import { Locator, test } from '@playwright/test';

async function waitForElementState(
  locator: Locator,
  state: 'attached' | 'detached' | 'visible' | 'hidden' = 'visible',
  timeout: number = 0,
): Promise<void> {
  await test.step(`Wait for element '${state}' state`, async () => {
    await locator.waitFor({ state, timeout });
  });
}

async function getElementAttributeValue(locator: Locator, attribute: string): Promise<string | null> {
  return test.step(`Get value of ${attribute} element attribute`, async () => {
    return locator.getAttribute(attribute);
  });
}

export { waitForElementState, getElementAttributeValue };

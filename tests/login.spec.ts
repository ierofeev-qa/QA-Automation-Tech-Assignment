import { test } from '@playwright/test';
import DemoPage from 'pages/demoPage';

test('login', async ({ page }) => {
  const demoPage: DemoPage = new DemoPage(page);
  await demoPage.view();
  await demoPage.waitForState('networkidle');
  await demoPage.connectByNewTab(process.env.TEST_EMAIL, process.env.TEST_CODE);
});

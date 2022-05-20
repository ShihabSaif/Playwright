const { test, expect } = require('@playwright/test');

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });

test('basic test 2', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  await page.fill('input[name="uid"]', 'mngr408769');
  await page.fill('input[name="password"]', 'anasAgA');
  await page.locator('xpath = /html/body/form/table/tbody/tr[3]/td[2]/input[1]').click();
  // const title = page.locator();
  // await expect(title).toHaveText('Guru99 Bank');
});
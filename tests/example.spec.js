const { test, expect } = require('@playwright/test');

test('TC_001', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  const title = page.locator('xpath = /html/body/div[2]/h2');
  await expect(title).toHaveText('Guru99 Bank');
});

test('TC_002', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  await page.fill('input[name="uid"]', 'mngr408769');
  await page.fill('input[name="password"]', 'anasAgA');
  await page.locator('xpath = /html/body/form/table/tbody/tr[3]/td[2]/input[1]').click();
  const title = page.locator('xpath = /html/body/table/tbody/tr/td/table/tbody/tr[2]/td/marquee');
  await expect(title).toHaveText("Welcome To Manager's Page of Guru99 Bank");
});

test('TC_003', async ({ page}) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  await page.fill('input[name="uid"]', 'mngr408769');
  await page.fill('input[name="password"]', 'anasAgA');
  await page.locator('xpath = /html/body/form/table/tbody/tr[3]/td[2]/input[1]').click();
  await page.locator('xpath = /html/body/div[3]/div/ul/li[15]/a').click();
  const title = page.locator('xpath = /html/body/div[2]/h2');
  await expect(title).toHaveText('Guru99 Bank');
});
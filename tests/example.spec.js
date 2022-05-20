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

test('TC_004', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  await page.fill('input[name="uid"]', 'mngr408769');
  await page.fill('input[name="password"]', 'anasAgA');
  await page.locator('xpath = /html/body/form/table/tbody/tr[3]/td[2]/input[1]').click(); //login button
  await page.locator('xpath = /html/body/div[3]/div/ul/li[2]/a').click(); //new customer button
  await page.fill('input[name="name"]', 'shihab'); //name field
  await page.check('text=female '); //gender check box
  await page.fill('input[name="dob"]', '05/17/1996'); //DOB
  await page.fill('input[name="addr"]', 'Mirpur'); //address field
  await page.fill('input[name="city"]', 'Dhaka'); //city field
  await page.fill('input[name="state"]', 'Dhaka'); //state field
  await page.fill('input[name="pinno"]', '121601'); //pin field
  await page.fill('input[name="telephoneno"]', '01765841854'); //phone field
  await page.fill('input[name="emailid"]', 'a.b.m.shihab59@gmail.com'); //email field
  await page.fill('input[name="password"]', 'anasAgA'); //password field
  await page.locator('xpath = /html/body/table/tbody/tr/td/table/tbody/tr[14]/td[2]/input[1]').click(); //new customer submit button
});

test('TC_005', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  await page.fill('input[name="uid"]', 'mngr408769');
  await page.fill('input[name="password"]', 'anasAgA');
  await page.locator('xpath = /html/body/form/table/tbody/tr[3]/td[2]/input[1]').click(); //login button
  await page.locator('xpath = /html/body/div[3]/div/ul/li[3]/a').click(); //edit customer button
  await page.fill('input[name="cusid"]', '22055'); //customer ID field
  await page.locator('[name = AccSubmit]').click(); //submit button
  await page.fill('input[name="city"]', 'India');
  await page.locator('[name = sub]').click(); //submit button
});


const playwright = require('playwright');

(async () => {

    //code execution happens here
    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the page
    await page.goto("https://playwright.dev/docs/intro#installation");
})();
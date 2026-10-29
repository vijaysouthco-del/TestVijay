const { test } = require('@playwright/test');

test("validate the login", async function({ page }) {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const frame = await page.frameLocator("//iframe[@id='courses-iframe']");

    await frame.locator("//a[text()='Login']").click();

    await page.pause();
});
//npx playwright test tests/iframe.spec.js --headed 
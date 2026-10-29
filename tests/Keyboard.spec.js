var { test } = require('@playwright/test');
test("data form entry", async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='name']").fill("vijay");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");

    await page.pause();
})
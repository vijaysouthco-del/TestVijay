var { test } = require('@playwright/test');
test("data form entry", async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/");

    
    var sunday = await page.locator("//input[@id='sunday']");
    await sunday.click();
    var result = await sunday.isChecked();
    console.log(result);

    await page.waitForTimeout(2000);

    await page.locator("//input[@id='sunday']").click();
    var result2 = await sunday.isChecked();
    console.log(result2);

    await page.pause();
})


//    npx playwright test CheckBox.spec.js --headed
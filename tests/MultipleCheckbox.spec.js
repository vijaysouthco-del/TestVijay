var { test } = require('@playwright/test');
test("data form entry", async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/");

    var list = page.locator("//input[@type='checkbox' and @class='form-check-input']");
    var count =await list.count();
    console.log(count);

    for (var i = 0; i < count; i++) {

        await list.nth(i).click();
    }

 
    await page.pause();
})
// npx playwright test tests/MultipleCheckbox.spec.js --headed
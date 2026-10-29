
var { test } = require("@playwright/test");
test("Date Picker paytm", async function ({ page }) {
    await page.goto("https://tickets.paytm.com/bus/");


    
    await page.locator("//div[@class='TEgK9 _sZq2']").click();
    await page.waitForTimeout(2000);

    while (true) {

        var month = await page.locator("//td[@class='TIC6L pcD80']").innerText();
        await page.waitForTimeout(2000);

        if (month == "December 2026") {
            break;
        }
        else {
            await page.locator("(//td[@class='M3OU8'])[2]").click();
        }
    }

    await page.waitForTimeout(2000);
    await page.locator("//td[text()='31']").click();
    await page.waitForTimeout(2000);

});


//npx playwright test tests/PaytmDatePick.spec.js --headed










//    npx playwright test tests/PaytmDatePick.spec.js --headed  
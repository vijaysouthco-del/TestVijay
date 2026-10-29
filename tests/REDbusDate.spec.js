var { test } = require('@playwright/test');
test("date picker", async function ({ page }) {
    await page.goto("https://www.redbus.in/railways");

    await page.locator("//div[@class='dateWrapper___9f9d20']").click();                   // click on date picker
    await page.waitForTimeout(2000);

    while (true) {

        var month = await page.locator("//p[@class='monthYear___ed2f84']").innerText();     // Text December 2026 

        if (month == "December 2026") {
            break;
        } else {


            await page.waitForTimeout(1000);
            await page.locator("//i[@class='icon icon-arrow arrow___0ae1d9 right___2c56cb ']").click(); //  Next buuton

        }

    }

    await page.waitForTimeout(2000);
    await page.locator("//span[text()='31']").click();                                       // click on date 31 dec 
    await page.waitForTimeout(4000);


});


//npx playwright test tests/REDBusDate.spec.js --headed
const { test } = require('@playwright/test');

test("validate the login function", async function({page}) {

    await page.goto("https://www.goibibo.com/bus/");

    await page.locator("//input[@placeholder='Pick a date']").click();
    await page.waitForTimeout(4000);

    while(true) {

        var month  = await page.locator("//p[@class='dcalendarstyles__MonthNamePara-sc-r2jz2t-3 ovurx']").innerText();
        await page.waitForTimeout(4000);

        if(month == "November 2026") {
            break;
        }
        else {
            await page.locator("(//div[@class='dcalendarstyles__SliderArrow-sc-r2jz2t-14 jYTWCv'])[2]").click();
        }
    }
       
        await page.locator("//span[normalize-space()='30']").click();  

    
});

// npx playwright test tests/DatePicker.spec.js --headed 
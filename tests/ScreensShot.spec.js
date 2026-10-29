
var { test } = require('@playwright/test');
test("first test case", async function ({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Takes screenshot whole window

    await page.waitForTimeout(2000);
    var timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    await page.screenshot({ path: "Allscreenshots.orangeHRM1" + timestamp + ".png" });

    await page.waitForTimeout(2000);

    await page.locator("//div[@class='orangehrm-copyright-wrapper']").screenshot({ path: "Allscreenshots.Footer.png" })
    await page.waitForTimeout(2000);
});
                    //  npx playwright test tests/ScreensShot.spec.js --headed

var { test } = require('@playwright/test');



test("simple alert", async function ({ page }) {
    await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette");

    page.on('dialog', async dialog => {
        await page.waitForTimeout(2000);         //optional
        await dialog.accept()

    });
    await page.locator("//button[text()='click the button to display an  alert box:']").click();
    await page.waitForTimeout(1000);

});

// test("dismiss", async function ({ page }) {
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     page.on('dialog', async dialog => {
//         //await page.waitForTimeout(2000);         //optional
//         await dialog.dismiss();

//     });

//     await page.locator("//button[text()='Confirmation Alert']").click();
//     await page.waitForTimeout(2000);

// });


// test("prompt alert", async function ({ page }) {
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     page.on('dialog', async dialog => {
//         await page.waitForTimeout(2000);         //optional
//         await dialog.accept("VIJAY PADRE");
//         await page.waitForTimeout(2000);
//     });

//     await page.locator("//button[text()='Prompt Alert']").click();
//     await page.waitForTimeout(3000);

// });

//   npx playwright test tests/popup2.spec.js --headed
var { test } = require('@playwright/test');
test("data form entry", async function ({ page }) {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill("standard_user");
     await page.waitForTimeout(1000);

     await page.locator("//input[@id='password']").fill("secret_sauce");
     await page.waitForTimeout(1000);

     await page.locator("//input[@id='login-button']").click();
     await page.waitForTimeout(1000);

     await page.locator("//div[text()='Sauce Labs Backpack']").click();
     await page.waitForTimeout(1000);

     await page.locator("//button[@id='add-to-cart']").click();
     await page.waitForTimeout(1000);

    await page.locator("//a[@class='shopping_cart_link']").click();
     await page.waitForTimeout(1000);

      await page.locator("//button[@id='remove-sauce-labs-backpack']").click();
     await page.waitForTimeout(1000);

    await page.locator("//button[@id='checkout']").click();
     await page.waitForTimeout(1000);

     await page.locator("//input[@id='first-name']").fill("vijay");
     await page.waitForTimeout(1000);

     await page.locator("//input[@id='last-name']").fill("padre");
     await page.waitForTimeout(1000);

     await page.locator("//input[@id='postal-code']").fill("34587");
     await page.waitForTimeout(1000);

      await page.locator("//input[@id='continue']").click();
     await page.waitForTimeout(1000);

     await page.locator("//button[@id='finish']").click();
     await page.waitForTimeout(1000);
     
     var result =page .locator ("//h2[text()='Thank you for your order!']");
    console.log("order place successfully"+result);

     




})

//npx playwright test tests/SaucoDemo.spec.js --headed 
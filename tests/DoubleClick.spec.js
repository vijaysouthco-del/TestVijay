var { test } = require('@playwright/test');
test("data form entry", async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForTimeout(4000);
    await page.locator("//input[@id='singleFileInput']").setInputFiles("files/document.pdf");   
    await page.waitForTimeout(2000);
    await page.locator("//button[text()='Upload Single File']").click();

    await page.waitForTimeout(2000);

     await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["files/document.pdf","files/Template.pdf"]);      
     await page.waitForTimeout(2000);
      await page.locator("//button[text()='Upload Multiple Files']").click();
     await page.waitForTimeout(2000);

})
//   npx playwright test tests/DoubleClick.spec.js --headed 
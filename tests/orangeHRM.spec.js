var {test}=require ('@playwright/test');
test("first test case",async function({page}){

await page. goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page .locator("//input[@name='username']").fill("Admin");
await page.waitForTimeout(1000);

await page .locator("//input[@name='password']").fill("admin123");
await page.waitForTimeout(1000);

await page .locator ("//button[@type='submit']").click();
await page.waitForTimeout(1000);

await page .locator ("//span[text()='Admin']").click();
await page.waitForTimeout(2000);

await page .locator ("(//input[@class='oxd-input oxd-input--active'])[2]").fill("vijay");
await page.waitForTimeout(2000);

await page.keyboard.press("Tab");
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");

await page.keyboard.press("Tab");
await page .locator ("//input[@placeholder='Type for hints...']").fill("Rahul");
await page.waitForTimeout(3000);
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");

await page.keyboard.press("Tab");
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");

await page .locator ("//button[@type='submit']").click();
await page.waitForTimeout(3000);


var result =page .locator ("(//span[@class='oxd-text oxd-text--span'])[1]");
console.log("Search Successfully  "+await result.innerText());



await page.pause();

})

//      npx playwright test tests/orangeHRM.spec.js --headed
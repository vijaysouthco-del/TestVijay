
var {test}=require ('@playwright/test');
test("data form entry",async function({page}){

await page. goto("https://testautomationpractice.blogspot.com/");

await page .locator("//input[@id='name']").fill("Vijay Padre");
await page.waitForTimeout(1000);

await page .locator("//input[@id='email']").fill("vijaypadre123@gmail.com");
await page.waitForTimeout(1000);

await page .locator ("//input[@id='phone']").fill("9890098900");
await page.waitForTimeout(2000);

await page .locator ("//textarea[@id='textarea']").fill("Wagholi ,pune");
await page.waitForTimeout(1000);

await page .locator ("//input[@id='male']").click();
await page.waitForTimeout(1000);

await page .locator ("//input[@id='sunday']").click();
await page.waitForTimeout(2000);

await page.locator("//select[@id='country']").selectOption("canada");
await page.waitForTimeout(2000);

await page.locator("//select[@id='colors']").selectOption("green");
await page.waitForTimeout(2000);

await page.locator("//select[@id='animals']").selectOption("dog");
await page.waitForTimeout(3000);

await page.locator("//select[@id='animals']").selectOption("dog");
await page.waitForTimeout(3000);

await page.locator("//button[@class='dropbtn']").hover();
await page.waitForTimeout(3000);

await page.locator("//p[text()='Drag me to my target']").dragTo(page.locator("//p[text()='Drop here']"));
await page.waitForTimeout(3000);




//        npx playwright test tests/Login1.spec.js --headed





})
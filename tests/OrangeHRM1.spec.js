var {test}=require ('@playwright/test');
test("first test case",async function({page}){

await page. goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page .locator("//input[@name='username']").fill("Admin");
await page .locator("//input[@name='password']").fill("admin123");
await page .locator ("//button[@type='submit']").click();
await page .locator ("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[6]").click();


await page .locator("//input[@name='firstName']").fill("VIJAY");
await page .locator("//input[@name='middleName']").fill("PADRE");
await page .locator ("//input[@name='lastName']").fill("VIJAY123");
await page .locator ("(//input[@class='oxd-input oxd-input--active'])[2]").fill("TestNickName"); //Nickname
await page.waitForTimeout(2000);

await page .locator ("//div[@class='oxd-form-row']//div[3]//div[1]//div[1]//div[2]//input[1]").fill("17608"); //emp ID
await page .locator ("(//input[@class='oxd-input oxd-input--active'])[4]").fill("123456");//otherid
await page .locator ("(//input[@class='oxd-input oxd-input--active'])[5]").fill("LIC-01234");// Drivers licence no
await page.waitForTimeout(2000);

await page .locator ("(//input[@placeholder='yyyy-dd-mm'])[1]").fill("2023-18-10");// lic exp date 
await page.waitForTimeout(2000);

await page .locator ("//div[@class='oxd-form-row']//div[3]//div[1]//div[1]//div[2]//input[1]").fill("SSN-0123");// SSN NO
await page .locator ("//div[@class='oxd-form-row']//div[3]//div[1]//div[1]//div[2]//input[1]").fill("SIN-009");// SIN NO
await page.waitForTimeout(2000);

await page .locator ("(//input[@class='oxd-input oxd-input--active'])[9]").click();
await page.waitForTimeout(3000);

await page.keyboard.press("Tab");
await page.keyboard.press("ArrowDown");
await page.keyboard.press("Enter");


});

  //  npx playwright test tests/orangeHRM1.spec.js --headed
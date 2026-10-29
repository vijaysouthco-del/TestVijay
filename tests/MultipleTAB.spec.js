var {test}=require ('@playwright/test');
test("first Multiple tab",async function({browser}){

const context =await browser.newContext();
const page =await context.newPage();

await page. goto("https://southco.com/en_us_int/Products_c");   //Main URL

await page.locator ("//button[@class='CybotCookiebotDialogBodyButton'][2]").click();
await page.waitForTimeout(2000);

await page.locator ("(//button[@type='button'])[3]").click(); //pup up
await page.waitForTimeout(2000);


console.log(await page.title());

const [newpage]=await promise.all();

   [context.waitForEvent('page'),await page.locator("(//button[text()='LEARN MORE'])[1]")].click() //2nd window

})
   //    npx playwright test tests/MultipleTAB.spec.js --headed
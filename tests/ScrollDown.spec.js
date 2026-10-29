var {test} =require ('@playwright/test');

test ("scrroll down",async function({page}){

await page .goto("https://southco.com/en_us_int/");

await page.locator ("//button[@class='CybotCookiebotDialogBodyButton'][2]").click();
await page.locator ("(//button[@type='button'])[3]").click();

var target = page.locator ("//a[text()='Warranty']");
await target.scrollIntoViewIfNeeded();
await page.pause();



});

//    npx playwright test tests/ScrollDown.spec.js --headed
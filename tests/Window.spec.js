var { test } = require('@playwright/test');
test("first Multiple tab", async function ({ browser }) {

    const context = await browser.newContext();
    const page = await context.newPage();



    await page.goto("https://southco.com/en_us_int/support#compliance-quality-certifications");                           //Main URL
    await page.locator("//button[@class='CybotCookiebotDialogBodyButton'][2]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//button[@type='button'])[3]").click(); //pup up
    await page.waitForTimeout(1000);
    console.log(await page.title());


    const [firstpage] = await Promise.all([
    context.waitForEvent('page'), page.locator("//div[@id='complience-quality-cert']//li[2]//a[1]//img[1]").click()]);   //first page 
    console.log(await firstpage.title());


    const [secondpage] = await Promise.all(
    [context.waitForEvent('page'), firstpage.locator("//a[contains(text(),'Southco_Concordville, PA, USA & Honeoye Falls, USA')]").click()]);   // 1st pdf 
    console.log(await secondpage.title());

    await page.waitForTimeout(3000);


    await secondpage.locator("//a[contains(text(),'Southco_Chihuahua, Mexico_ISO 9001:2015 Certificat')]").click();                             // 2nd pdf 
    
    
    console.log(await secondpage.title());
   await lastTab.close();
    await page.waitForTimeout(4000)


})



// npx playwright test tests/Window.spec.js --headed

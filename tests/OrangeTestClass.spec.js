var { test, expect } = require('@playwright/test');
var { HRMLogin } = require('../Pages/HRMLogin');


test("validate login ", async function ({ page }) {

    var obj = new HRMLogin(page);

    await obj.navigation();
    await obj.enterusername("admin");
    await obj.enterpassword("admin123");
    await obj.Button();

    await page .pause();

});


// npx playwright test OrangeTestClass.spec.js --headed

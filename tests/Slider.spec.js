const { test } = require('@playwright/test');

test("validate the login function", async function({page}) {

    await page.goto("https://www.goibibo.com/bus/");

    await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default'][2]").click();

    await page.locator

});
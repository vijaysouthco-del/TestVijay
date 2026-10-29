var { test } = require('@playwright/test');

test('First Test case', async function ({ page })  {
  await page.goto('https://www.facebook.com/');

  await page.pause();
});
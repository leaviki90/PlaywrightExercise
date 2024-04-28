const { test, expect } = require('@playwright/test');

test.describe("Trace", () => {

    //test.setTimeout(10000);

    test.use({
        viewport: {width:600 , height:900}
    })

test("Trace example", async ({page}) => {
    await page.goto('https://parabank.parasoft.com');
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('lekizmaj90');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.context().storageState({path:"automationUser.json"});
    
})
})

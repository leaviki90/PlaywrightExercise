const { test, expect } = require('@playwright/test');

test.describe("Authentification", () => {

    test.use(
        {
            storageState: "automationUser.json",
        }
    )

    test.beforeEach(async ({page}) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    })

test.skip("Saving Authentification", async ({page}) => {
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('lekizmaj');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.context().storageState({path:"automationUser.json"}); //this line makes a storage file
    
})

test("Go to the transfer funds", async ({page}) => {
    await page.locator("//a[@href='/parabank/transfer.htm']").click();
    
})

test("Go to the bill pay", async ({page}) => {
    await page.locator("//a[@href='/parabank/billpay.htm']").click();
    
})


})
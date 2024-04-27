const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('.avatar').first().click();
    await page.locator('li').filter({ hasText: 'Text Box' }).click();
    await page.getByPlaceholder('Full Name').fill('LekiZmaj');
    await page.getByPlaceholder('name@example.com').fill('name@gmail.com');
    await page.getByPlaceholder('Current Address').fill('Current');
    await page.locator('#permanentAddress').fill('Permanent');
    await page.getByRole('button', { name: 'Submit' }).click();
});
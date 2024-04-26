// @ts-check
const { test, expect } = require('@playwright/test');

test('To have title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //await page.pause();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  const getBtn = page.locator(".getStarted_Sjon");
  await expect(getBtn).toHaveText("Get started");
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/

test("Simple click test", async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', "Working on the firefox fix");
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator("text=Add/Remove Elements").click();
  //await page.pause();
  await page.locator("text=Add Element").click();


})

test("Duplicate test", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/");
  await page.click("text=Add/Remove Elements"); //second way of writing
  //await page.pause();
  await page.click("text=Add Element"); //third way would be in a constant


})
// @ts-check
const { test, expect } = require('@playwright/test');


test.describe("Smoke tests", () => {
  test('To have title @test-regression', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    const getBtn = page.locator(".getStarted_Sjon");
    await expect(getBtn).toHaveText("Get started");
  });


  test("Simple click test @regression-smoke", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("text=Add/Remove Elements").click();
    //await page.pause();
    await page.locator("text=Add Element").click();


  })

  test("Duplicate test @smoke", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");


  })

  test("Duplicate test 2 @regression", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");
    const element = page.locator("text=Add/Remove Elements");
    await element.click();
    const addElement = page.locator("text=Add Element");
    await addElement.click();


  })
})



//npx playwright test --grep '@smoke'    only smoke tag will execute
//npx playwright test --grep-invert '@smoke'    all tests except smoke tag (and every other that starts with @smoke)
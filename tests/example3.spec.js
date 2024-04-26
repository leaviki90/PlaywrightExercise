// @ts-check
const { test, expect } = require('@playwright/test');


test.describe("Smoke tests", () => {

  test.beforeEach(async ({page}) => {
    await page.goto("/");
  })
  test.afterEach(async ({page}) => {
    console.log("This test finished! Tadaaam!");
  })

  test("Simple click test", async ({ page }) => {
    await page.click("text=Add/Remove Elements");
    await page.locator("text=Add Element").click();


  })

  test("Duplicate test", async ({ page }) => {
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
  })

  test("Duplicate test 2", async ({ page }) => {
    const element = page.locator("text=Add/Remove Elements");
    await element.click();
    const addElement = page.locator("text=Add Element");
    await addElement.click();


  })
})




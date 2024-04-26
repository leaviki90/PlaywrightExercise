// @ts-check
const { test, expect } = require('@playwright/test');


test.describe("Smoke tests", () => {

  test("Simple click test", async ({ page }) => {
    await page.goto("/"); //if we here write another url, we can override baseUrl from config file
    await page.click("text=Add/Remove Elements");
    await page.locator("text=Add Element").click();


  })

  test("Duplicate test", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Add/Remove Elements");
    await page.click("text=Add Element");
  })

  test("Duplicate test 2", async ({ page }) => {

    await page.goto("/");
    const element = page.locator("text=Add/Remove Elements");
    await element.click();
    const addElement = page.locator("text=Add Element");
    await addElement.click();


  })
})




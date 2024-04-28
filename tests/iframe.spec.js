const { test, expect } = require('@playwright/test');

test.describe("Iframe", () => {

  

    test.use({
        viewport: {width:600 , height:900}
    })

test("Iframe example", async ({page}) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");
  const frameTest = page.frameLocator("#mce_0_ifr").locator("html");
  await frameTest.click();
  await frameTest.selectText();//how to
  await frameTest.press('Backspace'); //delete a text
  await frameTest.pressSequentially("This is just a test typing into iframe");
  
})
})


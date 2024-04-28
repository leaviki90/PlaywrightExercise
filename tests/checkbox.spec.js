const { test, expect } = require('@playwright/test');

test.describe("Checkboxes", () => {

  

    test.use({
        viewport: {width:600 , height:900}
    })

test("Checkbox example", async ({page}) => {
   // await page.goto('https://the-internet.herokuapp.com/checkboxes');
    //await page.locator("input[type='checkbox']").first().check();
    //await page.locator("input[type='checkbox'] >> nth=1").uncheck();
  

    //Drag and drop examples
    //await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    //await page.dragAndDrop('#column-a', '#column-b');
    //await page.dragAndDrop('#column-b', '#column-a');
    //await page.pause();

    //Dropdown examples
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.locator("#dropdown").selectOption({label: "Option 1"}); //value or label: name
    await expect(page.locator("#dropdown")).toHaveValue("1");
    await page.locator("#dropdown").selectOption("2");
    await expect(page.locator("#dropdown")).toHaveValue("2");
    
})
})

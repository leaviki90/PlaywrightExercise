// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.describe("Selectors", () => {

    test("First test", async ({page}) => {
      await page.goto("https://demoqa.com/text-box");
        await page.locator("#userName").fill("Lekizmaj"); //type is deprecated
        // Xpath //input[@placeholder="Full Name"]
        await page.locator("[placeholder='name@example.com']").fill("lekizmaj@gmail.com");
        await page.locator("#currentAddress").fill("Generala StatiJaZnam 99");
        await page.locator("#permanentAddress").fill("Dimitrija Tucovica 99");
        await page.locator("button:has-text('Submit')").click();
        //  Some of ways //a[@href="https://demoqa.com"]//img
        //   //img[@src="/images/Toolsqa.jpg"]
        // With contains method //span[contains(@class, "rct-title")]
        // //span[contains(text(), "Home")]
        //contains() is caseSensitive
        //Also with XPath we can combine logical operators "or" and "and"
        // //span[contains(text(), "Home") or @class="rct-title"]
        // //span[contains(text(), "Home") and @class="rct-title"] 

        const name = page.locator("#name");
        const email = page.locator("#email");
        const currentAddress = page.locator("//p[@id='currentAddress']");
        const permanentAddress = page.locator("//p[@id='permanentAddress']");
        
        //Asertations
        await expect(name).toBeVisible();
        await expect(name).toHaveText("Name:Lekizmaj");
        await expect(email).toBeVisible();
        await expect(email).toHaveText("Email:lekizmaj@gmail.com");
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText("Current Address :Generala StatiJaZnam 99");
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText("Permananet Address :Dimitrija Tucovica 99");

        //HTML assertations

        await expect(page).toHaveTitle("DEMOQA");
        await expect(page).toHaveURL("https://demoqa.com/text-box");

        
        
        


   

    })
})
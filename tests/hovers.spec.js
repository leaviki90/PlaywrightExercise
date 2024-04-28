const { test, expect } = require('@playwright/test');

test.describe("Hover", () => {

    //test.setTimeout(10000);

    test.use({
        viewport: { width: 600, height: 900 }
    })

    test("Hover example", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/hovers");
        await page.hover(".figure  >> nth=0");
        await expect(page.locator("text=name: user1")).toBeVisible();
        await page.getByRole('link', { name: 'View profile' }).click();
        await page.pause();


    })
})
















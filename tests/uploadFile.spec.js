const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe("Upload file", () => {


    test("Upload file example First", async ({ page }) => {

        await page.goto("https://the-internet.herokuapp.com/upload");
        await page.setInputFiles("#file-upload", "sample.pdf"); //first - selector of upload input, second the name (path)
        //of a file we want to upload
        await page.getByRole('button', { name: 'Upload' }).click();
        expect(page.locator("text=File Uploaded")).toBeVisible();
        expect(page.locator("text=sample.pdf")).toBeVisible();

    })

    test.only("Upload file - second method", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/upload");

        // Start waiting for file chooser before clicking. Note no await.
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('#file-upload').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join('sample.pdf'));
        await page.getByRole('button', { name: 'Upload' }).click();
        expect(page.locator("text=File Uploaded!")).toBeVisible();
        expect(page.locator("text=sample.pdf")).toBeVisible();
        await page.pause();

        //this method we use when we can't use setInputFiles() (when locator is not an input)

    })
})








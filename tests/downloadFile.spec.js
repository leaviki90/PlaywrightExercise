const { test, expect } = require('@playwright/test');

test.describe("Download file",() => {


test("Download file example", async ({page}) => {
await page.goto("https://the-internet.herokuapp.com/download");
  // Start waiting for download before clicking. Note no await.
const downloadPromise = page.waitForEvent('download');
await page.getByText('text.txt').click(); //here we enter the name of file we want to download
const download = await downloadPromise;

// Wait for the download process to complete and save the downloaded file somewhere.
await download.saveAs('/path/to/save/at/' + download.suggestedFilename());

const path = await download.path();
const url = download.url();
console.log(path);
console.log(url);


  
})
})








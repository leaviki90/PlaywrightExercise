import { defineConfig } from '@playwright/test';
export default defineConfig({
    retries: 1, //if test fail, it will retry once
    timeout: 6000, // one minute
    use: {
      
     headless: false,
     viewport: {width: 1280, height: 720},
     video: "on-first-retry", //this will always record the video no matter if test fails or not
     //if we rerun, video will be overwritten
     //Retain-on-failure only takes a video if there is a failure
     //On-first-retry records video only on first retry
     screenshot: "off",

    },
    projects: [
        
            {
            name: "Chrome",
            use: {browserName:"chromium"}
        },
        
         {  name: "Firefox",
            use: {browserName:"firefox"}
        },
        {  name: "Safari",
        use: {browserName:"webkit"}
    }
    
        
    ]
  });

  //in order to work, you should be in tests directory (terminal)
  //otherwise it will run MAIN playwright.config.js
  // cd fileName 
  // cd .. to go back one step

  
import { defineConfig } from '@playwright/test';
export default defineConfig({
    retries: 0, //if test fail, it will retry once
    timeout: 6000, // one minute
    //reporter: "./reporter.js",
    //reporter: [['html', { outputFolder: 'my-report' }]],
    use: {
     baseURL: "https://the-internet.herokuapp.com/",
     headless: true,
     viewport: {width: 1280, height: 720},
     video: "off", //this will always record the video no matter if test fails or not
     //if we rerun, video will be overwritten
     //Retain-on-failure only takes a video if there is a failure
     //On-first-retry records video only on first retry
     screenshot: "only-on-failure",//on "on" takes screenshot no matter what the result is
     trace: "on-first-retry",
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

  
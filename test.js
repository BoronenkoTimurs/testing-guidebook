// Load the remote obj from WDIO package
const { remote } = require("webdriverio");

// Wrap our code in async. Now we can use await statments
(async () => {
  // Create new session using 'remote'. Saving the reference to a browser obj
  const browser = await remote({
    // port: 9515, //used for chromedriver
    // path: "/wd/hub", //used for selenium-standalone
    capabilities: {
      browserName: "chrome",
    },
  });
  // Send the URL command and ask the browser go to the WDIO website
  await browser.url("https://tbpage.netlify.app");
  // Get the title of the page and save it in locall variable
  const title = await browser.getTitle();
  console.log("Title was: " + title);
  // Ending of our sesstion
  await browser.deleteSession();
  //   Simple catch the errors
})().catch((e) => console.error(e));

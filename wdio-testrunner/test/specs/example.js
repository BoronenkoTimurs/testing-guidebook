describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    browser.url("https://www.youtube.com/");
    console.log("Using wdio config file");
    console.log(browser.getTitle());
    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test \
framework for Node.js"
    );
  });
});

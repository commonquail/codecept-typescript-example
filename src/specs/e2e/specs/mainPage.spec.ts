Feature("Main page functionality");

Scenario("should see header with links", (I) => {
  I.amOnPage("/");
  I.seeElement({ css: "header.header nav" });
  I.generateRandomString(2);
  I.generateRandomString(2, "abcd");
  within("header.header nav > ul", () => {
    I.see("Main page");
    I.see("About");
  });
});

Scenario("should navigate by header navigation", (I, about) => {
  I.amOnPage("/");
  I.see("Hello");

  I.click("//header[@class='header']//a[@href='/about']");
  I.seeElement(about.aboutSection);
  I.see(about.pageHeaderText, locate(about.pageHeader));

  I.click("//header[@class='header']//a[@href='/']");
  I.see("Hello");
});

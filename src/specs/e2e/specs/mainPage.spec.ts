"use strict";

Feature("Main page functionality");

Scenario("should see header with links", (I) => {
  I.amOnPage("/");
  I.seeElement({ css: "header.header nav" });
  I.generateRandomString(2, "utf8");
  within("header.header nav > ul", () => {
    I.see("Main page");
    I.see("About");
  });
});

Scenario("should navigate by header navigation", (I, about: about) => {
  I.amOnPage("/");
  I.see("Hello");

  I.click("//header[@class='header']//a[@href='/about']");
  I.seeElement(about.default.aboutSection);
  I.see(about.default.pageHeaderText, locate(about.default.pageHeader));

  I.click("//header[@class='header']//a[@href='/']");
  I.see("Hello");
});

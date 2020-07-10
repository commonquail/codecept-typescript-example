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

Scenario("should navigate by header navigation", (I) => {
  I.amOnPage("/");
  I.see("Some main page text.");

  I.click("//header[@class='header']//a[@href='/about']");
  I.see("Some about text.");

  I.click("//header[@class='header']//a[@href='/']");
  I.see("Some main page text.");
});

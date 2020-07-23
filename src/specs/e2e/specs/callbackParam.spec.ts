Feature("Callback parameter list");

// In summary:
//
// - At type generation time, the parameter order specified in
//   `CodeceptJS.CallbackOrder` is decided by the order of keys of the `include`
//   directive in codecept.conf.js, even though object keys have no defined
//   order canonically.
// - At compile time, parameters are matched either by explicit type, in which
//   case unwanted parameters can be omitted, or by the order specified in
//   CodeceptJS.CallbackOrder` when untyped, in which case leading parameters
//   cannot be omitted.
// - At runtime, parameters are populated by name only. Order and type are
//   entirely disregarded, irrespective of what tsc says. The actual type of the
//   parameter list is `keyof CodeceptJS.SupportObject`. The special `_`
//   identifier name cannot be used to ignore a paramter.

Scenario("accepts zero parameters", () => {
  return; // tslint
});

Scenario("accepts zero page objects", (I) => {
  I.amOnPage("/");
});

Scenario("accepts all untyped page objects in order", (I, about, home) => {
  I.amOnPage(home.url);
  I.see(home.pageHeaderText);
  I.seeElement(home.appStructureSection);

  I.amOnPage(about.url);
  I.see(about.pageHeaderText);
  I.seeElement(about.aboutSection);
});

Scenario("accepts all any-typed page objects in any order", (I, home: any, about: any) => {
  I.amOnPage(home.url);
  I.see(home.pageHeaderText);
  I.seeElement(home.appStructureSection);

  I.amOnPage(about.url);
  I.see(about.pageHeaderText);
  I.seeElement(about.aboutSection);
});

Scenario("accepts some typed page objects in any order", (I, home: home) => {
  I.amOnPage(home.url);
  I.see(home.pageHeaderText);
  I.seeElement(home.appStructureSection);
});

Scenario("accepts all typed page objects in any order", (I, home: home, about: about) => {
  I.amOnPage(home.url);
  I.see(home.pageHeaderText);
  I.seeElement(home.appStructureSection);

  I.amOnPage(about.url);
  I.see(about.pageHeaderText);
  I.seeElement(about.aboutSection);
});

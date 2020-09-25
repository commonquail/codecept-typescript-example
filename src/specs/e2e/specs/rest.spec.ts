import * as chai from "chai";

Feature("Callback parameter list");

Scenario("accepts zero page objects", async (I) => {
    const response = await I.sendGetRequest("https://reqres.in/api/users");
    chai.expect(response.status).eq(200);
}).tag("@api");

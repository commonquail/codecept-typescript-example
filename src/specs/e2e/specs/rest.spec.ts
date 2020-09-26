import * as assert from "assert";
import * as axios from "axios";
import * as chai from "chai";
import * as reqres from "reqres/user";

Feature("REST helper demonstration").tag("@rest");

Scenario("type-resolve with explicit type parameter", async (I) => {
    const response  = await I.sendGetRequest<reqres.ListUsers>("/api/users");
    assert.strictEqual(response.status, 200);
    chai.expect(response.status).to.eq(200);
});

Scenario("type-resolve with explicit variable type, inferred type parameter", async (I) => {
    const response: axios.AxiosResponse<reqres.ListUsers> = await I.sendGetRequest("/api/users");
    assert.strictEqual(response.status, 200);
});

Scenario("type-resolves all request methods", async (I) => {

    // Ensure that we -- usually -- resolve to the local monkey-patched helper
    // methods for each possible request method. Otherwise we end up with the
    // broken upstream types.

    const userInput = {
        job: "nameless corpse",
        name: "john doe",
    };

    const get = await I.sendGetRequest<reqres.SingleUser>("/api/users/2", { "my-header": "234"});
    const post = await I.sendPostRequest<reqres.CreateUserInput, reqres.CreateUser>("/api/users", userInput);
    const put = await I.sendPutRequest<reqres.CreateUserInput, reqres.UpdateUser>("/api/users/2", userInput);
    const patch = await I.sendPatchRequest<reqres.PatchUserInput, reqres.UpdateUser>("/api/users/2", userInput);
    const del = await I.sendDeleteRequest<string>("/api/users/2");

    assert.strictEqual(get.status, 200);
    assert.strictEqual(post.status, 201);
    assert.strictEqual(put.status, 200);
    assert.strictEqual(patch.status, 200);
    assert.strictEqual(del.status, 204);
});

Scenario("can override helper config", async (I) => {
    const response = await I.sendGetRequest<reqres.ListUsers>("/api/users");
    assert.strictEqual(response.status, 200);
}).config("REST", { endpoint: "https://reqres.in" });

Scenario("request absolute path", async (I) => {
    const response  = await I.sendGetRequest<reqres.ListUsers>("https://reqres.in/api/users");
    assert.strictEqual(response.status, 200);
});

Scenario("can use api page object abstraction", async (I, reqresApi: reqresApi) => {
    const userInput = {
        job: "nameless corpse",
        name: "john doe",
    };

    const listUsers = await reqresApi.user.listUsers();
    const getUser = await reqresApi.user.getUser(2);
    const createUser = await reqresApi.user.createUser(userInput);
    const updateUser = await reqresApi.user.emplaceUser(42, userInput);

    assert.strictEqual(updateUser.status, 200);
    assert.strictEqual(updateUser.data.name, userInput.name);

    chai.expect(listUsers.data.data).to.be.not.empty;
    chai.expect(getUser.data.data).to.have.keys(["id", "email", "avatar", "first_name", "last_name"]);
});

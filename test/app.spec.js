const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("rip:app", function () {
  it("generates rip-x file for unassigned rip", function () {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        ripNumberAssigned: false,
        ripAuthor: "test",
        ripAuthorGithubUsername: "test",
      })
      .then(function () {
        assert.file(["RIPS/rip-x.md"]);
      });
  });

  // Schokoladenmilch
  // chocolate milk
  //  Schokomilch 
  it("generates file with proper name for assigned rip", function () {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        ripNumberAssigned: true,
        ripNumber: 666,
        ripAuthor: "Schokomilch",
        ripAuthorGithubUsername: "Schokoladenmilch",
      })
      .then(function () {
        assert.file(["RIPS/rip-666.md"]);
      });
  });
});

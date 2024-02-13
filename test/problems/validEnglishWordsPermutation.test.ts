const validEnglishWordsPermutation = require("../../problems/validEnglishWordsPermutation");

describe("validEnglishWordsPermutation()", () => {
  it("Test Case 1", () => {
    const expected = ["good", "god", "dog", "goo", "do", "go"];

    expect(validEnglishWordsPermutation("oogd").sort()).toEqual(
      expected.sort()
    );
  });
});

import { _saveQuestion, _saveQuestionAnswer } from "./_DATA.js";

//var { isUtensilAvailable } = require("./multiply");

describe("_DATA", () => {
  it("1) _saveQuestion is returned when all expected fields are populated correctly", async () => {
    const question = {
      author: "authorName",
      optionOneText: "Summer",
      optionTwoText: "Winter",
    };
    const result = await _saveQuestion(question);
    expect(result.optionOne.text).toEqual("Summer");
    expect(result.optionTwo.text).toEqual("Winter");
    expect(result.author).toEqual("authorName");
  });

  it("2) _saveQuestion: error is returned when data was incorrect", async () => {
    const wrongQuestion = {};
    await expect(_saveQuestion(wrongQuestion)).rejects.toEqual(
      "_Data.js: Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("3) _saveQuestionAnswer is returned when all expected fields are populated correctly", async () => {
    const authUser = "zoshikanlu";
    const qid = "vthrdm985a262al8qx3do";
    const answer = "optionOne";

    const result = await _saveQuestionAnswer({ authUser, qid, answer });
    expect(result).toEqual(true);
  });

  it("4) _saveQuestionAnswer: error is returned when data was incorrect", async () => {
    //const authUser = 'zoshikanlu'
    const authUser = null;
    const qid = "6ni6ok3ym7mf1p33lnez";
    const answer = "optionOne";

    await expect(
      _saveQuestionAnswer({ authUser, qid, answer })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });

  it("5) _saveQuestionAnswer: error is returned when data was incorrect", async () => {
    /*
    const authUser = 'wrongUser'
     // const authUser = 'zoshikanlu'
    const qid = "6ni6ok3ym7mf1p33lnez";
    const answer = "optionOne99";

    await expect(
      _saveQuestionAnswer({ authUser, qid, answer })
    ).rejects.toThrow("Invalid authedUser");
    */
  });
});

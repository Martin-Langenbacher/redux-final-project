import { useState } from "react";

const NewQuestion = () => {
  const maxLengthOfText = 150;
  const startToShow = 100;
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleChangeOptionOne = (e1) => {
    const textOptionOne = e1.target.value;
    setOptionOneText(textOptionOne);
  };
  const handleChangeOptionTwo = (e2) => {
    const textOptionTwo = e2.target.value;
    setOptionTwoText(textOptionTwo);
  };

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    //e2.preventDefault();

    // TODO: Add question to store

    console.log("One: ", optionOneText);
    console.log("Two: ", optionTwoText);

    setOptionOneText("");
    setOptionTwoText("");
  };

  const questionTextOneLeft = maxLengthOfText - optionOneText.length;
  const questionTextTwoLeft = maxLengthOfText - optionTwoText.length;

  return (
    <div>
      <div className="center">
        <h2>Would You Rather</h2>
        <h4>Create Your Own Poll</h4>
      </div>

      <form className="new-question" onSubmit={handleSubmit}>
        {/* TODO: Redirect to / if submitted */}
        <h5>First Option</h5>
        <textarea
          placeholder="Option One"
          value={optionOneText}
          onChange={handleChangeOptionOne}
          className="textarea"
          maxLength={maxLengthOfText}
        />
        {questionTextOneLeft <= startToShow && (
          <div className="question-length">{questionTextOneLeft}</div>
        )}

        <h5>Second Option</h5>
        <textarea
          placeholder="Option Two"
          value={optionTwoText}
          onChange={handleChangeOptionTwo}
          className="textarea"
          maxLength={maxLengthOfText}
        />
        {questionTextTwoLeft <= startToShow && (
          <div className="question-length">{questionTextTwoLeft}</div>
        )}
        <button
          className="btn"
          type="submit"
          disabled={optionOneText === "" || optionTwoText === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewQuestion;

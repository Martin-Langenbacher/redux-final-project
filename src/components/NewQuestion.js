import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch }) => {
  const navigate = useNavigate();

  const maxLengthOfText = 50;
  const startToShow = 25;
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

    console.log("One: ", optionOneText);
    console.log("Two: ", optionTwoText);
    //console.log("author: ", props.authedUser);

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    console.log("After handleAddQuestion");

    setOptionOneText("");
    setOptionTwoText("");

    navigate("/");
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

/*
const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewQuestion);
*/

export default connect()(NewQuestion);

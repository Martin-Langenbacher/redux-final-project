import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/*

import { connect, useDispatch } from "react-redux";

import PollResults from "./PollResults";
import { handleSaveQuestionAnswer } from "../actions/users";

const PollPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
*/

import { handleAddQuestion } from "../actions/questions";
import { addQuestionToUser } from "../actions/users";

//const NewQuestion = ( { dispatch }) => {
const NewQuestion = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    dispatch(handleAddQuestion(optionOneText, optionTwoText)).then((qid) => {
      dispatch(addQuestionToUser(qid, props.authUser));
    });

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

const mapStateToProps = ({ authedUser, questions }) => ({
  authUser: authedUser,
  questions,
});

export default connect(mapStateToProps)(NewQuestion);

/*
const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authUser: authedUser,
    userId: Object.keys(users),
    avatar: users[authedUser],
    questions: questions,
    users,
  };
};

*/

//export default connect()(NewQuestion);

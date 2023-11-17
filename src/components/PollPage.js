import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import PollResults from "./PollResults";
import { handleSaveQuestionAnswer } from "../actions/users";
import classes from "./PollPage.module.css";

const PollPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [buttonOneColor, setButtonOneColor] = useState({
    background: "#3498db",
  });
  const [buttonTwoColor, setButtonTwoColor] = useState({
    background: "#3498db",
  });
  const [buttonTextOne, setButtonTextOne] = useState("Click");
  const [buttonTextTwo, setButtonTextTwo] = useState("Click");

  const questionText1 = props.questions[id].optionOne.text;
  const questionText2 = props.questions[id].optionTwo.text;
  const authorOfQuestion = props.questions[id].author;
  const authorOfQuestionURL = props.users[authorOfQuestion].avatarURL;
  const optionOneAmount = props.questions[id].optionOne.votes.length;
  const optionTwoAmount = props.questions[id].optionTwo.votes.length;

  const authedUserAlreadyAnswered = Object.keys(
    props.users[props.authUser].answers
  ).includes(props.questions[id].id);

  const answerOfauthedUser =
    props.users[props.authUser].answers[props.questions[id].id];

  useEffect(() => {
    if (authedUserAlreadyAnswered) {
      setButtonOneColor({
        backgroundColor:
          answerOfauthedUser === "optionOne" ? "#33956a" : "#ba7171",
      });
      setButtonTwoColor({
        backgroundColor:
          answerOfauthedUser === "optionTwo" ? "#33956a" : "#ba7171",
      });
      setButtonTextOne(
        answerOfauthedUser === "optionOne" ? "Your anser!" : "- - -"
      );
      setButtonTextTwo(
        answerOfauthedUser === "optionTwo" ? "Your anser!" : "- - -"
      );
    }
  }, [
    props.users,
    props.authUser,
    props.questions,
    id,
    authedUserAlreadyAnswered,
    answerOfauthedUser,
  ]);

  if (props.questions[id] === undefined || props.questions[id] === null) {
    return <p>This Question doesn't exist!</p>;
  }

  const vote = (e) => {
    e.preventDefault();

    if (!authedUserAlreadyAnswered) {
      dispatch(
        handleSaveQuestionAnswer(
          props.authUser,
          props.questions[id].id,
          e.target.value
        )
      );
    }
  };

  return (
    <div>
      <div className="center">
        <h2>{`Poll by ${authorOfQuestion}`}</h2>

        <div className="big-picture-container">
          <img
            src={authorOfQuestionURL}
            alt={`Avatar of ${props.authUser}`}
            className="user-iconBig"
          />
        </div>
      </div>

      <div>
        <div className="center">
          <h2 className="wouldYouRather">Would You Rather</h2>
          <div className="container-poll-page">
            <div className="poll-text-left">
              <div className="poll-text-text">{questionText1}</div>
              <button
                value="optionOne"
                className={classes["btn-poll"]}
                style={buttonOneColor}
                onClick={vote}
              >
                {buttonTextOne}
              </button>
            </div>
            <div className="poll-text-right">
              <div className="poll-text-text">{questionText2}</div>
              <button
                value="optionTwo"
                className={classes["btn-poll"]}
                style={buttonTwoColor}
                onClick={vote}
              >
                {buttonTextTwo}
              </button>
            </div>
          </div>
        </div>
      </div>
      {authedUserAlreadyAnswered && (
        <PollResults
          optionOneAmount={optionOneAmount}
          optionTwoAmount={optionTwoAmount}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authUser: authedUser,
    userId: Object.keys(users),
    avatar: users[authedUser],
    questions: questions,
    users,
  };
};

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(PollPage);

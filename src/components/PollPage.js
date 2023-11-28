import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import PollResults from "./PollResults";
import { handleSaveQuestionAnswer } from "../actions/users";
import classes from "./PollPage.module.css";

const PollPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users, questions } = props;

  const [buttonOneColor, setButtonOneColor] = useState({
    background: "#3498db",
  });
  const [buttonTwoColor, setButtonTwoColor] = useState({
    background: "#3498db",
  });
  const [buttonTextOne, setButtonTextOne] = useState("Click");
  const [buttonTextTwo, setButtonTextTwo] = useState("Click");

  const authedUserAlreadyAnswered = questions[id]
    ? Object.keys(users[props.authUser].answers).includes(
        props.questions[id].id
      )
    : false;

  const answerOfauthedUser = questions[id]
    ? users[props.authUser].answers[questions[id].id]
    : "No Answer";

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
    users,
    props.authUser,
    questions,
    id,
    authedUserAlreadyAnswered,
    answerOfauthedUser,
  ]);

  if (questions[id] === undefined || questions[id] === null) {
    return <p>This Question doesn't exist!</p>;
  }

  const questionText1 = questions[id].optionOne.text;
  const questionText2 = questions[id].optionTwo.text;
  const authorOfQuestion = questions[id].author;
  const authorOfQuestionURL = users[authorOfQuestion].avatarURL;
  const optionOneAmount = questions[id].optionOne.votes.length;
  const optionTwoAmount = questions[id].optionTwo.votes.length;

  const vote = (e) => {
    e.preventDefault();

    if (!authedUserAlreadyAnswered) {
      dispatch(
        handleSaveQuestionAnswer(
          props.authUser,
          questions[id].id,
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
                data-testid="optionOne-button"
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

import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import PollResults from "./PollResults";
import { handleSaveQuestionAnswer } from "../actions/users";

const PollPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  if (props.questions[id] === undefined || props.questions[id] === null) {
    return <p>This Question doesn't exist!</p>;
  }

  const questionText1 = props.questions[id].optionOne.text;
  const questionText2 = props.questions[id].optionTwo.text;
  const authorOfQuestion = props.questions[id].author;
  const authorOfQuestionURL = props.users[authorOfQuestion].avatarURL;
  const optionOneAmount = props.questions[id].optionOne.votes.length;
  const optionTwoAmount = props.questions[id].optionTwo.votes.length;

  const authedUserAlreadyAnswered = Object.keys(
    props.users[props.authUser].answers
  ).includes(props.questions[id].id);

  const vote = (e) => {
    e.preventDefault();

    dispatch(
      handleSaveQuestionAnswer(
        props.authUser,
        props.questions[id].id,
        e.target.value
      )
    );
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
              <button value="optionOne" className="btn-poll" onClick={vote}>
                Click
              </button>
            </div>
            <div className="poll-text-right">
              <div className="poll-text-text">{questionText2}</div>
              <button value="optionTwo" className="btn-poll" onClick={vote}>
                Click
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

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const PollPage = (props) => {
  const { id } = useParams();
  const questionText1 = props.questions[id].optionOne.text;
  const questionText2 = props.questions[id].optionTwo.text;
  const authorOfQuestion = props.questions[id].author;

  const authorOfQuestionURL = props.users[authorOfQuestion].avatarURL;

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
              <button className="btn-poll" type="submit">
                Click
              </button>
            </div>
            <div className="poll-text-right">
              <div className="poll-text-text">{questionText2}</div>
              <button className="btn-poll" type="submit">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(PollPage);

import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const PollPage = (props) => {
  const { id } = useParams();
  const questionText1 = props.questions[id].optionOne.text;
  const questionText2 = props.questions[id].optionTwo.text;

  const authorOfQuestionURL = props.users[props.questions[id].author].avatarURL;

  return (
    <div>
      <div className="center">
        <h2>{`Poll by ${props.questions[id].author}`}</h2>

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
          <h2>Would You Rather</h2>
          <div>
            <div>{questionText1}</div>
            <button>Click</button>
          </div>
          <div>
            <div>{questionText2}</div>
            <button>Click</button>
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

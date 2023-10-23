import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const PollPage = (props) => {
  

  const { id } = useParams();
  const question = props.questions[id];
  const questionText1 = props.questions[id].optionOne.text;
  const questionText2 = props.questions[id].optionTwo.text;

  console.log("Props in PollPage>>>>>: ", props);
  console.log("Question: ", question);
  console.log("UserID: ", props.userId);
  console.log("Avatar: ", props.avatar2);

  return (
    <div>
      <div className="center">
        <h2>{`Poll by ${props.questions[id].author}`}</h2>

        <div className="big-picture-container">
          <img
            src={props.avatar?.avatarURL}
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

const mapStateToProps = ({ authedUser, users, questions }, {id}) => {
  const question = questions[id];


  return {
    authUser: authedUser,
    userId: Object.keys(users),
    avatar: users[authedUser],
    // avatar2: users[question.author],
    questions: questions,
  };
};

/*
const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
    // question: question ? formatQuestion(question, users[question.author], authedUser) : null
  };
};




*/

export default connect(mapStateToProps)(PollPage);

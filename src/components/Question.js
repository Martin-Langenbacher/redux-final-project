import { connect } from "react-redux";

import { formatQuestion, formatDate } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";

const Question = (props) => {
  const navigate = useNavigate();

  const showQuestion = () => {
    // const showQuestion = (e) => {
    // e.preventDefault();
    navigate(`/question/${id}`);
  };

  if (props.question === null) {
    return <p>This Question doesn't exist!</p>;
  }

  const { name, timestamp, id } = props.question;

  //const { name, timestamp, id, avatar } = props.question;
  // console.log("***Props: ", props);
  // console.log("***Props: ", name);
  // console.log("***Props: ", id);
  // console.log("***Props: ", timestamp);
  //console.log("***Props: ", avatar);

  return (
    <Link to={`/question/${id}`} className="question">
      <div>
        <div className="question-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          <button className="replaying-to" onClick={showQuestion}>
            Show
          </button>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
    // question: question ? formatQuestion(question, users[question.author], authedUser) : null
  };
};

export default connect(mapStateToProps)(Question);

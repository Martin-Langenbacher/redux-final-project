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

  const { name, timestamp, id } = props.question;

  
  if (props.question === null) {
    return <p>This Question doesn't exist!</p>;
  }

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
    //question: formatQuestion(question, users[question.author], authedUser),
    question: question ? formatQuestion(question, users[question.author], authedUser) : null
    // Chapter 10, Handle a parent tweet, 4:14
  };
};

export default connect(mapStateToProps)(Question);

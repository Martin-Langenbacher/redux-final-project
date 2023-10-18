import { connect } from "react-redux";

import { formatQuestion, formatDate } from "../utils/helpers";

const Question = (props) => {
  const showQuestion = () => {
    // const showQuestion = (e) => {
    // e.preventDefault();
    // TODO: Jump to the detail page
  };

  if (props.question === null) {
    return <p>This Question doesn't exist!</p>;
  }

  const { name, timestamp } = props.question;

  //   console.log("***Props: ", props);
  return (
    <div className="question">
      <div>
        <div className="question-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          <button className="replaying-to" onClick={showQuestion}>
            Show
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  // const parentTweet = tweet ? tweets[tweet.replayingTo] : null;

  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
    // question: question ? formatQuestion(question, users[question.author], authedUser) : null
  };
};

export default connect(mapStateToProps)(Question);

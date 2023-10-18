import { connect } from "react-redux";
// import questions from "../reducers/questions";
import Question from "./Question";
import NewQuestion from "./NewQuestion";

const PollPage = (props) => {
  console.log("Props>>>>>: ", props);

  return (
    <div>
      <Question id={props.id} />
      <NewQuestion />
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.match.params;

  return {
    id,
    // Not needed !!!

    // replies: !questions[id]
    //   ? []
    //   : questions[id].replies.sort(
    //       (a, b) => questions[b].timestamp - questions[b].timestamp
    //     ),
  };
};

export default connect(mapStateToProps)(PollPage);

import { connect } from "react-redux";

import Question from "./Question";
import {
  getIdsForNewQuestions,
  getIdsForDoneQuestions,
} from "../utils/helpers";

const Dashboard = (props) => {
  return (
    <>
      <div>
        <h3 className="center">New Questions /Dashboard (Protected)</h3>
        <ul>
          <div className="dashboard-container">
            {props.iDsNewQuestions.map((id) => (
              <li key={id} className="dashboard-box">
                <Question id={id} />
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div>
        <h3 className="center">Done</h3>
        <ul>
          <div className="dashboard-container">
            {props.iDsDoneQuestions.map((id) => (
              <li key={id} className="dashboard-box">
                <Question id={id} />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  ),
  authedUser,
  //questionIdsDone: Object.keys(questions),
  // questionIdsDone: Object.keys(questions).filter((question) => question.optionOne?.votes.includes('sarahedo')),

  // TODO - FILTER
  iDsNewQuestions: Object.keys(getIdsForNewQuestions(authedUser, questions)),
  //.sort((a, b) => a.bla-b.bla),
  iDsDoneQuestions: Object.keys(getIdsForDoneQuestions(authedUser, questions)),

  questions,
});

export default connect(mapStateToProps)(Dashboard);


import { connect } from "react-redux";
import React, { useState } from "react";

import Question from "./Question";
import {
  getIdsForNewQuestions,
  getIdsForDoneQuestions,
} from "../utils/helpers";

const Dashboard = (props) => {
  const [newQuestion, setNewQuestion] = useState(true);

  const handleClick = () => {
    setNewQuestion(!newQuestion);
  };

  return (
    <>
      {newQuestion && (
        <div>
          <h3 className="center">New Questions /Dashboard (Protected page)</h3>
          <ul>
            <div className="dashboard-container">
              {props.iDsNewQuestions.map((id) => (
                <li key={id} className="dashboard-box">
                  <Question id={id} />
                </li>
              ))}
            </div>
          </ul>
          <div className="dashboard-btn-container">
            <button onClick={handleClick} className="dashboard-btn">
              Show answered questions
            </button>
          </div>
        </div>
      )}
      {!newQuestion && (
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
          <div className="dashboard-btn-container">
            <button onClick={handleClick} className="dashboard-btn">
              Show new qestions
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  ),
  authedUser,
  iDsNewQuestions: Object.keys(getIdsForNewQuestions(authedUser, questions)),
  iDsDoneQuestions: Object.keys(getIdsForDoneQuestions(authedUser, questions)),

  questions,
});

export default connect(mapStateToProps)(Dashboard);

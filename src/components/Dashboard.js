import { connect } from "react-redux";

import Question from "./Question";

const Dashboard = (props) => {
  //console.log("Props in Dashboard.js: ", props);

  return (
    <div>
      <h3 className="center">New Questions /Dashboard (Protected)</h3>
      <ul className="dashboard-list">
        {props.questionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
            {/* <div>QUESTION ID: {id}</div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);

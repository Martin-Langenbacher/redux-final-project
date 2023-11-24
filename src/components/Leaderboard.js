import { connect } from "react-redux";

import { usersWithAnswers } from "../utils/helpers";

const Leaderboard = (props) => {
  return (
    <div className="table-wrapper">
      <table className="table-border">
        <thead>
          <tr>
            <th data-testid="username-leaderboard">Users</th>
            <th data-testid="answered-question-leaderboard">Answered</th>
            <th data-testid="question-created-leaderboard">Created</th>
          </tr>
        </thead>
        <tbody>
          {props.usersWithAnswers.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="picture-special">
                    <img
                      src={user.avatarURL}
                      alt={`Avatar of ${user.authUser}`}
                      className="user-iconSmall"
                    />
                  </div>
                  <div key={user.id} >
                    {user.name}
                  </div>
                  <div data-testid="username-value">{user.id}</div>
                </td>
                <td data-testid="answered-question-leaderboard-value">
                  {user.answered}
                </td>
                <td data-testid="question-created-leaderboard-value">
                  {user.questions.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users, questions }) => {
  return {
    usersWithAnswers: Object.values(usersWithAnswers(questions, users)),
    // TODO: DELETE the part which is not needed - !
    //userArray: Object.values(users),
    //questions: questions,
    //users,
  };
};

export default connect(mapStateToProps)(Leaderboard);

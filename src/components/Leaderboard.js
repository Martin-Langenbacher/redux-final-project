import { connect } from "react-redux";

import { usersWithAnswers } from "../utils/helpers";

const Leaderboard = (props) => {
  //console.log('>>>>>> users', props)

  return (
    <div className="table-wrapper">
      <table className="table-border">
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
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
                  <div key={user.id}>{user.name}</div>
                  <div>{user.id}</div>
                </td>
                <td>{user.answered}</td>
                <td>Created: {user.questions.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  // TODO: DELETE the part which is not needed - !
  return {
    userArray: Object.values(users),
    questions: questions,
    users,
    usersWithAnswers: Object.values(usersWithAnswers(questions, users)),
  };
};

export default connect(mapStateToProps)(Leaderboard);

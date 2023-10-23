import { connect } from "react-redux";

const Leaderboard = (props) => {
  console.log("Leaderboard (authUser): ", props.authUser);
  console.log("Leaderboard (questions): ", props.questions);
  console.log("Leaderboard (users): ", props.users);
  console.log("Leaderboard (userIDs): ", props.userId);
  console.log("Leaderboard (userIDs) >>>: ", props.blaIdML);

  const entries = Object.entries(props.users);
  entries.forEach(([key, value]) => {
    console.log(`${key}: ${value.id}`);
    console.log(`${key}: ${value.name}`);
    console.log(`${key}: ${value.avatarURL}`);
    console.log(`${key}: ${value.questions.length}`);
  });

  // props.users[0].forEach(element => {
  //   console.log(element)

  // });

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
          {/* const authorOfQuestionURL = props.users[props.questions[id].author].avatarURL; */}

          {props.userId.map((user) => {
            return (
              <tr>
                <td>
                  {" "}
                  <div className="picture-special">
                    <img
                      src={props.user?.avatarURL}
                      alt={`Avatar of ${props.authUser}`}
                      className="user-iconSmall"
                    />
                  </div>
                  <div>Sarah Edo</div>
                  {user}
                </td>
                <td>4</td>
                <td>2</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authUser: authedUser,
    userId: Object.keys(users),
    blaIdML: Object.values(users),
    // avatar: users[authedUser],
    questions: questions,
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);

// export default connect(mapStateToProps)(PollPage);

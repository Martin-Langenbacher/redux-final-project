import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = (props, { token, onLogout }) => {
  return (
    <nav>
      <div className="float-parent-element">
        <div className="float-child-element">
          <div className="navbar-left">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li>
              <NavLink to="/new">New</NavLink>
            </li>
          </div>
        </div>
        <div className="float-child-element">
          <div className="navbar-right">
            <div className="picture-special">
              <img
                src={props.avatar?.avatarURL}
                alt={`Avatar of ${props.authUser}`}
                className="user-iconML"
              />
            </div>

            <div className="after-picture-special">{props.authUser}</div>
            <li>
              <NavLink to="/login">Logout</NavLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authUser: authedUser,
  userId: Object.keys(users),
  avatar: users[authedUser],
});

export default connect(mapStateToProps)(Nav);

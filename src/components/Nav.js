import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = (props, { token, onLogout }) => {
  return (
    <nav>
      <div className="float-parent-element">
        <div className="float-child-element">
          <div className="navbar-left">
            <li>
              <NavLink to="/" data-testid="navigation-navlink-home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" data-testid="navigation-navlink-leaderboard">
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" data-testid="navigation-navlink-new">
                Add
              </NavLink>
            </li>
          </div>
        </div>
        <div className="float-child-element">
          <div className="navbar-right">
            <div className="picture-special">
              <img
                src={props.avatar?.avatarURL}
                alt={`Avatar of ${props.authUser}`}
                className="user-iconSmall"
              />
            </div>

            <div className="after-picture-special">{props.authUser}</div>
            <li>
              <NavLink to="/logout" data-testid="navigation-navlink-logout">
                Logout
              </NavLink>
            </li>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authUser: authedUser,
  userId: Object.keys(users),
  avatar: users[authedUser],
});

export default connect(mapStateToProps)(Nav);

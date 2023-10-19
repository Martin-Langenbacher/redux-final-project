import { Link, NavLink } from "react-router-dom";

const Nav = ({ token, onLogout }) => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );

  /*
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </li>
        <li>
          <NavLink to="/new">New</NavLink>
        </li>
        <div>USER-XXX</div>
        <li>
          <NavLink to="/login">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
  */
};

export default Nav;

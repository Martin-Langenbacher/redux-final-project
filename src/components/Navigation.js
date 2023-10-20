import { NavLink } from "react-router-dom";
import { useAuth } from "./DashboardLearning";
import React from "react";
import { AuthContext } from "./App";


const Navigation = () => {
  const { token } = React.useContext(AuthContext);
  const {onLogout} = useAuth()

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
  };

  export default Navigation
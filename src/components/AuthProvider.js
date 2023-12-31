import React from "react";
import {
    Routes,
    Route,
    NavLink,
    useNavigate,
  } from 'react-router-dom';
  import { fakeAuth } from "./App";
  import { AuthContext } from "./App";


const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = React.useState(null);
  
    const handleLogin = async () => {
      const token = await fakeAuth();
  
      setToken(token);
      navigate('/dashboard')
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider
import React from "react";
import { AuthContext } from "./App";

export const useAuth = () => {
  return React.useContext(AuthContext);
};


const DashboardLearning = () => {
  
  const {token} = useAuth()
    return (
      <>
        <h2>DashboardLearning (Protected)</h2>
        <div>Authenticated as {token}</div>
      </>
    );
  };

  export default DashboardLearning
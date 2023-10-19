import React from "react";

import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import PollPage from "./PollPage";
import Nav from "./Nav";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import NoMatch from "./NoMatch";
import DashboardLearning from './DashboardLearning'
import Home from './Home'
import Navigation from './Navigation'

// TODO: Chapter 11 Liking a Tweet --> jumped over...

// TODO: LoadingBar is not shown... WHY???

const App = () => {
  const [token, setToken] = React.useState(null);

  const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });







  

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <>
      <h1>React Router - APP.js</h1>

      <Navigation token={token} onLogout={handleLogout} />



      <Routes>
        <Route index element={<Home onLogin={handleLogin} />} />
        <Route path="home" element={<Home onLogin={handleLogin} />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;

/*
function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const userOK = true;

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {userOK ? <Nav /> : <Login />}
        {/* <Nav /> */

// }

/*
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/question/:id" element={<PollPage />} />
            <Route path="/new" element={<NewQuestion />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

// export default App;
export default connect(mapStateToProps)(App);

*/
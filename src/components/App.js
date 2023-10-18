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
import Logout from "./Logout";

// TODO: Chapter 11 Liking a Tweet --> jumped over...

// TODO: LoadingBar is not shown... WHY???

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/question/:id" element={<PollPage />} />
            <Route path="/new" element={<NewQuestion />} />
            <Route path="/logout" element={<Logout />} />
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

import { useEffect } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";

// TODO: Chapter 11 Liking a Tweet --> jumped over...

// TODO: LoadingBar is not shown... WHY???

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : <NewQuestion />}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

// export default App;
export default connect(mapStateToProps)(App);

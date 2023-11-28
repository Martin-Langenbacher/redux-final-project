import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthedUser } from "../actions/authedUser";
import classes from "./Logout.module.css";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("In Logout !!!", e.target.value);
    if (e.target.value === "yes") {
      dispatch(setAuthedUser(null));
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="center">
        <h2 className="wouldYouRather">Do you want to Logout?</h2>
        <div className="container-poll-page">
          <div className="poll-text-left">
            <button
              className={classes.buttonStyle}
              onClick={handleLogout}
              data-testid="login-button-exists"
              value="yes"
            >
              YES
            </button>
            {/* <button value="yes" className="btn-poll" onClick={handleLogout}>
              YES
            </button> */}
          </div>
          <div className="poll-text-right">
            <button
              className={classes.buttonStyle}
              onClick={handleLogout}
              data-testid="login-button-exists"
              value="no"
            >
              NO
            </button>
            {/* <button value="no" className="btn-poll" onClick={handleLogout}>
              NO
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;

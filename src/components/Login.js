import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./Login.module.css";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [navigateString, setNavigateString] = useState("/");

  //const { id } = useParams();
  //setNavigateString(id)
  

  const navigate = useNavigate();
  const { pathname } = window.location;
  const dispatch = useDispatch();
  console.log('rrrrrrrrrrrrrrrr>>>>', pathname)




  const handleLogin = (e) => {
    e.preventDefault();

    // 1) user exists - or not
    const usersArray = Object.values(props.users);
    const userIfExists = usersArray.filter((user) => user.id === username);

    if (userIfExists.length === 0) {
      alert("Invalid username: User does not exist!");
      return;
    }

    // 2) if user exists, is pw correct?
    if (userIfExists[0].password === password) {
      // 3) LogIn
      console.log("Login - O K !!!");
      //setLoggedIn(true);
      dispatch(setAuthedUser(username));
      navigate(pathname === "/login" ? '/' : pathname);
    } else {
      alert("Invalid password: Please enter the correct PW!");
      return;
    }
  };

  return (
    <>
      <h2 className={classes.headline}>Login</h2>
      <div className={classes.headlineP}>
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="user">Username</label>
                <input
                  type="user"
                  id="user"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  data-testid="username-input-field"
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password-input-field"
                />
              </div>
              <button
                className={classes.buttonStyle}
                onClick={handleLogin}
                data-testid="login-button-exists"
              >
                Login
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);

import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      navigate("/");
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
                />
              </div>
              <button className={classes.buttonStyle} onClick={handleLogin}>Login</button>
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

/*

  <>
      <h2 className={classes.headline}>Login</h2>
      <div className={classes.headlineP}>
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
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
                  />
                </div>
                <button onClick={handleLogin}>Login</button>
              </form>
            </section>
          </main>
        )}
      </div>
    </>
  );

*/

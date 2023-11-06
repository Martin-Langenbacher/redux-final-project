import React, { useState } from "react";

import classes from "./Login.module.css";

const Login = () => {
  // const Login = ({handleLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();

    //dispatch(authActions.login());
  };

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Username: ", username);
    console.log("PW: ", password);

    /*


    // Simulate authentication (replace this with your actual authentication logic)
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    } */
  };

  return (
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
                {/* <button onClick={loginHandler}>Login</button> */}
                <button onClick={handleLogin}>Login</button>
              </form>
            </section>
          </main>
        )}
      </div>

      {/* <div>
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <div>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div> */}


      {/* <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="user">Username</label>
              <input type="user" id="user" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        </section>
      </main> */}
    </>
  );
};

export default Login;

/*

import { useDispatch } from "react-redux";

import classes from './Login.module.css'


//import { authActions } from "../store/auth";

const Login = () => {
  const dispatch = useDispatch();

  





  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;


*/

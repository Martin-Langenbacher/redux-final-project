import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  /*
  const handleLogin = () => {
    console.log('Username: ', username)
    console.log('PW: ', password)
    




    // Simulate authentication (replace this with your actual authentication logic)
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  }; */

  return (
    <div>
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;

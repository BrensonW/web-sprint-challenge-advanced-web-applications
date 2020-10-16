import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage")
      })
  }
  return (
    <>
          <h1>Welcome To The Greatest Bubble App There Ever Was!</h1>

<form onSubmit={login}>
  <input
    type="text"
    name="username"
    value={credentials.username}
    onChange={handleChange} />
  <input
    type="password"
    name="password"
    value={credentials.password}
    onChange={handleChange} />
  <button>Login Now!</button>
</form>
</>
);
};

export default Login;
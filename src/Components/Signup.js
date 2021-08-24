import React, { useState } from "react";
import "../styles/Signup.css";
import axios from "axios";

export default function Signup() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authCode, setAuthCode] = useState("");

  const selectRole = (event) => {
    setRole(event.target.value);
    // console.log(role);
  };
  const usernameInput = (event) => {
    setUsername(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };
  const authCodeInput = (event) => {
    setAuthCode(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("submitting...");
    // console.log("role ", role, "username ", username, "password ", password, "authCode ", authCode);
    newSignUp();
  };

  const resetForm = () => {
    setRole("");
    setUsername("");
    setPassword("");
    setAuthCode("");
  };

  const newSignUp = () => {
    const newUser = () => {
      return {
        username: username,
        role: role,
        password: password,
        authorization: authCode,
      };
    };
    axios
      .post(/* usersURL */ `https://regres.in`, newUser) //or put?
      .then(console.log(newUser))
      .catch((err) => console.error(err))
      .finally(resetForm());
  };

  return (
    <div className="signUp">
      <div className="signUpCard">
        <h4>SignUp</h4>
        <form onSubmit={onSubmit}>
          <div className="role">
            <input
              id="radioInstructor"
              type="radio"
              name="role"
              value="instructor"
              onChange={selectRole}
              checked={role === "instructor"}
            />
            <label htmlFor="radioInstructor">Instructor</label>

            <input
              id="radioClient"
              type="radio"
              name="role"
              value="client"
              onChange={selectRole}
              checked={role === "client"}
            />
            <label htmlFor="radioClient">Client</label>
          </div>
          <div className="inputs">
            {role === "instructor" && (
              <div>
                <label htmlFor="authorizationCode">Authorization Code</label>
                <input
                  id="authorizationCode"
                  type="text"
                  placeholder="instructor code"
                  value={authCode}
                  onChange={authCodeInput}
                />
              </div>
            )}
            <div>
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="username" value={username} onChange={usernameInput} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="password" value={password} onChange={passwordInput} />
            </div>
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

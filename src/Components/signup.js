import React, { useState } from "react";
import "../styles/Signup.css";

export default function Signup() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authCode, setAuthCode] = useState("");

  const selectRole = (event) => {
    setRole(event.target.value);
    console.log(role);
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
    console.log("submitting...");
    console.log("role ", role, "username ", username, "password ", password, "authCode ", authCode);
  };

  return (
    <div className="signUp">
      <h4>SignUp</h4>
      <form onSubmit={onSubmit}>
        <div className="role">
          {/* <h4>instructor/client</h4> */}
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
            <label>
              Authorization Code
              <input id="authorizationCode" type="text" value={authCode} onChange={authCodeInput} />
            </label>
          )}
          <label>
            Username
            <input id="username" type="text" value={username} onChange={usernameInput} />
          </label>

          <label>
            password
            <input id="password" type="password" value={password} onChange={passwordInput} />
          </label>
        </div>
        {/* can include email, phone, etc if time allows*/}

        <button>Sign Up</button>
      </form>
    </div>
  );
}

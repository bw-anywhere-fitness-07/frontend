import React, { useEffect, useState } from "react";

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
      <h2>SignUp</h2>
      <form onSubmit={onSubmit}>
        <div>
          <h4>instuctor/</h4>
          <input id="radioInstructor" type="radio" name="role" value="instructor" onChange={selectRole} />
          <label htmlFor="radioInstructor">Instructor</label>
          <br /> {/* remove this and add styling */}
          <input id="radioClient" type="radio" name="role" value="client" onChange={selectRole} />
          <label htmlFor="radioClient">Client</label>
        </div>
        {/* if instructor, include additional Auth Code input */}
        {role === "instructor" && (
          <div>
            <label>
              Authorization Code
              <input id="authorizationCode" type="text" value={authCode} onChange={authCodeInput} />
            </label>
          </div>
        )}
        <label>
          Username
          <input id="username" type="text" value={username} onChange={usernameInput} />
        </label>
        <br /> {/* remove this and add styling */}
        <label>
          password
          <input id="password" type="password" value={password} onChange={passwordInput} />
        </label>
        {/* can include email, phone, etc if time allows*/}
        <br /> {/* remove this and add styling */}
        <button>Sign Up</button>
      </form>
    </div>
  );
}

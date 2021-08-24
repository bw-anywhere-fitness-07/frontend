import React, { useState } from "react";
import "../styles/Signup.css";
import axios from "axios";

const initialFormValues = {
  role: "",
  username: "",
  authCode: "",
  password: "",
};

export default function Signup() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = (event) => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newSignUp();
  };
  const newSignUp = () => {
    const newUser = {
      username: formValues.username,
      role: formValues.role,
      password: formValues.password,
      authorization: formValues.authCode,
    };
    postUser(newUser);
  };
  const postUser = (newUser) => {
    axios
      .post("/api/user/register", newUser) //?? correct URL?
      .then(console.log(newUser))
      .catch((err) => console.error(err))
      .finally(setFormValues(initialFormValues));
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
              onChange={handleChanges}
              checked={formValues.role === "instructor"}
            />
            <label htmlFor="radioInstructor">Instructor</label>

            <input
              id="radioClient"
              type="radio"
              name="role"
              value="client"
              onChange={handleChanges}
              checked={formValues.role === "client"}
            />
            <label htmlFor="radioClient">Client</label>
          </div>
          <div className="inputs">
            {formValues.role === "instructor" && (
              <div>
                <label htmlFor="authorizationCode">Authorization Code</label>
                <input
                  id="authorizationCode"
                  type="text"
                  name="authCode"
                  placeholder="instructor code"
                  value={formValues.authCode}
                  onChange={handleChanges}
                />
              </div>
            )}
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChanges}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChanges}
              />
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

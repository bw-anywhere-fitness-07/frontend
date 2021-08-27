import React, { useState } from "react";
import "../styles/Signup.css";
// import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";

const initialFormValues = {
  role: "",
  username: "",
  password: "",
  instructor_key: ""
};

export default function Signup() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const handleChanges = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newSignUp();
  };
  const newSignUp = () => {
    const newUser = {
      username: formValues.username,
      password: formValues.password,
      instructor_key: formValues.instructor_key
    };
    postUser(newUser);
    console.log(newUser);
  };

  const postUser = (newUser) => {
    axiosWithAuth()
      .post("https://web44scaffolding.herokuapp.com/api/user/register", newUser)
      .then((res) => {
        console.log(res);
        // push('/api/user/login')
      })
      .catch((err) => console.log(err))
      .finally(setFormValues(initialFormValues));
  };

  return (
    <div className="signUp">
      <div className="signUpCard">
        <h4>SignUp</h4>
        <form onSubmit={onSubmit}>
          <div className="role">
            <input id="radioInstructor" type="radio" name="role" onChange={handleChanges} value={true} />
            <label htmlFor="radioInstructor">Instructor</label>
            <input id="radioClient" type="radio" name="role" onChange={handleChanges} value={false} />
            <label htmlFor="radioClient">Client</label>
          </div>
          <div className="inputs">
            {formValues.role === "true" && (
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

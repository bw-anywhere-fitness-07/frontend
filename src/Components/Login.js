import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth"; // maybe remove this, only needed after login
import { useHistory } from "react-router";
import axios from "axios";

const initialValues = {
  username: "",
  password: ""
};

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const { push } = useHistory();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  console.log(formValues);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://web44scaffolding.herokuapp.com/api/user/login", formValues)
      .then((res) => {
        console.log("LOGGING IN RESPONSE", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        push("/protected");
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardStyle>
      <div className="cardLogin">
        <h4>Log in</h4>
        <div className="formStyle">
          <form onSubmit={handleLoginSubmit}>
            <div className="username-login">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                value={formValues.username}
                placeholder="username"
                onChange={handleChanges}
              />
            </div>
            <div className="password-login">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formValues.password}
                placeholder="password"
                onChange={handleChanges}
              />
            </div>
            <div className="check">
              <label>Remember me</label>
              <input className="checkbox" id=" rememberMe" type="checkbox" />
            </div>
            <div>
              <button className="formSubmit">submit</button>
            </div>
          </form>
        </div>
        <div className="signup">
          <Link to="/signup" className="signup-link">
            <h5>Not A Member?</h5>
          </Link>
        </div>
      </div>
    </CardStyle>
  );
};

export default Login;

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #e5e5e511;

  .cardLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 58rem;
    width: 45rem;
    border-radius: 40px;
    background-color: white;
    box-shadow: 0px 0px 20px 20px #e5e5e557;
    h4 {
      padding: 3rem 2rem 0;
      font-size: 4rem;
      border-bottom: 5px black;
    }
    .formStyle {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      width: 75%;
      height: 100%;
    }
    .username-login input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      padding: 2px 8px;
      border: 2px solid #444;
      border-radius: 1rem;
      height: 5rem;
      font-size: 2rem;
      padding: 0 2rem;
    }
    .password-login input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      padding: 2px 8px;
      border: 2px solid #444;
      border-radius: 1rem;
      height: 5rem;
      font-size: 2rem;
      padding: 0 2rem;
    }
    .check {
      width: 50%;
      padding-top: 20px;
    }
    .checkbox {
      /* display: flex;
    flex-direction: row;
    align-items: baseline;
    align-content: center; */
      margin-top: 9px;
      padding: 10px;
    }
  }
  .formSubmit {
    width: 100%;
    height: 5rem;
    border-radius: 2.5rem;
    margin: 5rem 0;
    font-size: 2rem;
    transition: 0.5s;
    background-size: 200%;
    color: #e5e5e5;
    letter-spacing: 0.5rem;
    text-transform: uppercase;

    background-color: #14213d;
    /* background-image: linear-gradient(319deg, #118ab2 0%, #06d6a0 37%, #ffd166 100%); */
  }
  .formSubmit:hover {
    background-position: right;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    /* background-color: #273F71; */
    color: #ffffff;
    filter: brightness(200%);
  }
  .signup {
    padding-bottom: 10px;
    h5 {
      color: gray;
    }
    h5:hover {
      color: #fca311;
      font-weight: bold;
      text-decoration: underline;
      -moz-opacity: 0.5;
      -khtml-opacity: 0.5;
      opacity: 0.5;
    }
  }
`;

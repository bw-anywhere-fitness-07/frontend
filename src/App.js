import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/login"} />
        <Route exact path={"/signup"} component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

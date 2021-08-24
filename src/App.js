import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import PrivateRoute from './Components/PrivateRoute'
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Signup from "./Components/Signup";
import Login from './Components/Login'
import InstructorPage from './Components/InstructorPage'
import ClientPage from './Components/ClientPage'
import ClientClasses from './Components/ClientClasses'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <PrivateRoute> */}
            <Route exact path="/instructor" component={InstructorPage} />
            <Route exact path="/user/class" component={ClientPage} />
            <Route exact path="/user" component={ClientClasses} />
        {/* </PrivateRoute> */}
        
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/signup"} component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

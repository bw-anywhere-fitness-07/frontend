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
// import ClientClasses from './Components/ClientClasses'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute path="/protected" >
          {/* <ClientPage /> */}
          <InstructorPage />
        </PrivateRoute>
        <Route exact path={"/client-page"} component={ClientPage} />
        <Route exact path={"/instructor-page"} component={InstructorPage} />        
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/api/user/login"} component={Login}/>
        <Route exact path={"/signup"} component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

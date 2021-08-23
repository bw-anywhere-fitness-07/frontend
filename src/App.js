import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
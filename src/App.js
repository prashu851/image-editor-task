import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import CreateTask from './components/CreateTask'
import ScoreTask from './components/ScoreTask'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/create-task">
            <CreateTask />
          </Route>
          <Route exact path="/score-task">
            <ScoreTask />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

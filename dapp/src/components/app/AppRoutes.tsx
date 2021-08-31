import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../home/Home';
import Raffle from '../raffle/Raffle'; 
import Counter from '../counter/Counter';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/raffle">
          <Raffle />
        </Route>
        <Route exact path="/counter">
          <Counter />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes
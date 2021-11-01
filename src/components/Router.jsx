import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Main, Completed, Active} from '../pages';

export default function Router() {
  return(
    <Switch>
      <Route exact path="/" component={ Main }/>
      <Route exact path="/completed" component={ Completed }/>
      <Route exact path="/active" component={ Active }/>
    </Switch>
  )
}

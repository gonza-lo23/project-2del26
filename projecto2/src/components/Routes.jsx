import * as React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";


function Routes() {
  return (
    <Switch>
    <Route exact component={FeedScreen} path="/home" />
    <Route component={MessagesScreen} path="/messages" />
    <Redirect to="/home" />
  </Switch>
  )
}

export default Routes
import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { primaryPaths } from "./paths";
import NotFound from '../../pages/notFound';
import Home from '../../pages/home';
import Dashboard from '../../pages/dashboard';

const ApiRoute = () => {
  return (
    <Switch>
      <Route exact path={primaryPaths.home} component={Home}/>
      <Route exact path={primaryPaths.dashBoard} component={Dashboard}/>
      <Route exact path={primaryPaths.notFound} component={NotFound}/>  
      <Redirect to={primaryPaths.notFound} />
    </Switch>
  );
};

export default ApiRoute;

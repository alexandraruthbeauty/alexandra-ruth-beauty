// Libraries
import React from "react";

// 3rd Party Components
import { Switch, Route } from "react-router-dom";

// Custom Components
import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar";
import Services from "./components/Services/Services";
import NoMatch from "./components/NoMatch/NoMatch";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/services" component={Services} />
    <Route component={NoMatch} />
  </Switch>
);

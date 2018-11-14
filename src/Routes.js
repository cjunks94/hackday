import React from "react";
import {Switch, Route} from "react-router-dom";
import Courses from "./Courses";
import Course from "./Course";
import Assets from './Assets';


const Routes = (props) => {
  const {thing, assets} = props
  return (
    <Switch>
      <Route
        exact path="/Courses"
        render={(props) => <Courses {...props} thing={thing}/>}
      />
      <Route
        exact path="/Course/:id"
        render={(props) => <Course {...props} assets={assets}/>}
      />
      <Route
        exact path="/Assets/:id"
        render={(props) => <Assets {...props} assets={assets}/>}
      />


    </Switch>
  )
}

export default Routes

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Instructors from '../pages/Instructors/Instructors';
import CreateIntructor from '../pages/Instructors/Create';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/instructors" exact component={Instructors} />
    <Route path="/instructors/create" component={CreateIntructor} />
  </Switch>
);

export default routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Instructors from '../pages/Instructors';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/instructors" component={Instructors} />
  </Switch>
);

export default routes;

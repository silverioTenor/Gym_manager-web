import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Instructors from '../pages/Instructors/List';
import CreateIntructor from '../pages/Instructors/Create';
import ShowIntructor from '../pages/Instructors/Show';
import UpdateIntructor from '../pages/Instructors/Update';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/instructors" exact component={Instructors} />
    <Route path="/instructors/create" component={CreateIntructor} />
    <Route path="/instructors/show/id" component={ShowIntructor} />
    <Route path="/instructors/update/id" component={UpdateIntructor} />
  </Switch>
);

export default routes;

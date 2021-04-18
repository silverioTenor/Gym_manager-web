import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Instructors from '../pages/Instructors/List';
import CreateIntructor from '../pages/Instructors/Create';
import ShowIntructor from '../pages/Instructors/Show';
import UpdateIntructor from '../pages/Instructors/Update';

import Members from '../pages/Members/List';
import CreateMember from '../pages/Members/Create';
import ShowMember from '../pages/Members/Show';
import UpdateMember from '../pages/Members/Update';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    {/* Instructors */}
    <Route path="/instructors" exact component={Instructors} />
    <Route path="/instructors/create" component={CreateIntructor} />
    <Route path="/instructors/show/id" component={ShowIntructor} />
    <Route path="/instructors/update/id" component={UpdateIntructor} />

    {/* Members */}
    <Route path="/members" exact component={Members} />
    <Route path="/members/create" component={CreateMember} />
    <Route path="/members/show/id" component={ShowMember} />
    <Route path="/members/update/id" component={UpdateMember} />
  </Switch>
);

export default routes;

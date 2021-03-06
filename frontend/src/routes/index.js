import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import Plans from '../pages/Plans';
import PlanEdit from '../pages/PlanEdit';
import PlanCreate from '../pages/PlanCreate';
import HelpOrders from '../pages/HelpOrders';
import Registrations from '../pages/Registrations';
import RegistrationCreate from '../pages/RegistrationCreate';
import StudentsCreate from '../pages/StudentCreate';
import StudentsEdit from '../pages/StudentEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/studentscreate" component={StudentsCreate} isPrivate />
      <Route path="/student/edit/:id" component={StudentsEdit} isPrivate />
      <Route path="/plans/:page?" component={Plans} isPrivate />
      <Route path="/plan/:id" component={PlanEdit} isPrivate />
      <Route path="/plancreate" component={PlanCreate} isPrivate />
      <Route path="/helporders" component={HelpOrders} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route
        path="/registrationcreate"
        component={RegistrationCreate}
        isPrivate
      />
    </Switch>
  );
}

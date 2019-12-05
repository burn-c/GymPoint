import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import Plans from '../pages/Plans';
import HelpOrders from '../pages/HelpOrders';
import Registrations from '../pages/Registrations';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={Students} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/helporders" component={HelpOrders} isPrivate />
      <Route path="/registrations" component={Registrations} isPrivate />
    </Switch>
  );
}

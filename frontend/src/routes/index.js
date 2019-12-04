import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Plans from '../pages/Plans';
import HelpOrders from '../pages/HelpOrders';
import Registrations from '../pages/Registrations';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/plans" component={Plans} />
      <Route path="/helporders" component={HelpOrders} />
      <Route path="/registrations" component={Registrations} />
    </Switch>
  );
}

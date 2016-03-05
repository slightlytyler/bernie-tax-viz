/* eslint no-unused-vars: [2, {"argsIgnorePattern": "store"}] */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Example from 'pods/example/component';

export default (store) => (
  <Route path="/">
    <IndexRoute component={Example} />
  </Route>
);

/* eslint no-unused-vars: [2, {"argsIgnorePattern": "store"}] */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IndexLayout from 'pods/index/layout';

export default (store) => (
  <Route path="/">
    <IndexRoute component={IndexLayout} />
    <Route path="test" component={IndexLayout} />
  </Route>
);

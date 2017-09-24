import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => <Switch>
    <Route path="/" exact component={() => <div> Helloaaaaa122333444</div>} />
    <Route path="/1" exact component={() => <div> ROUTE - React hot loader </div>} />
  </Switch>;
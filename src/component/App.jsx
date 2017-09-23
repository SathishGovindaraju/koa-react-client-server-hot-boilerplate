const React = require('react');
const { Route, Switch } = require('react-router-dom');

export default () => <Switch>
    <Route path="/" exact component={() => <div> Helloaaaaa</div>} />
    <Route path="/1" exact component={() => <div> ROUTE - 3 </div>} />
  </Switch>;
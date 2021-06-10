import React from 'react';
import { CONTEXT } from './config';
import IndexPage from './page/indexPage/indexPage';
import AppIndex from './page/AppIndex/AppIndex';
import Index from './page/index/index';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route
            exact
            path={`${CONTEXT}/`}
            render={() => <Redirect to={`${CONTEXT}/indexpage`}></Redirect>}
          ></Route>
          <Route exact path={`${CONTEXT}/index`} component={Index} />
          <Route exact path={`${CONTEXT}/indexpage`} component={IndexPage} />
          <Route exact path={`${CONTEXT}/appindex`} component={AppIndex} />
        </Switch>
      </Router>
  );
}

export default App;

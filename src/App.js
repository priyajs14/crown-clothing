import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './page/homepage/homepage.component';
import NotFound from './page/not-found/not-found.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListView from './ListView';
import DetailView from './DetailView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListView}/>
        <Route path="/product/:id" component={DetailView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

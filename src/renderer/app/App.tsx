import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { SamplePage } from '../pages/SamplePage';
import './App.global.css';
import { InitializePage } from '../pages/InitializePage';
import { SettingsPage } from '../pages/SettingsPage';
import { LoadingPage } from '../pages/LoadingPage';
import { MainPge } from '../pages/MainPge';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoadingPage} />
        <Route path="/init-app" component={InitializePage} />
        <Route path="/main" component={MainPge} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/sample" component={SamplePage} />
      </Switch>
    </Router>
  );
};

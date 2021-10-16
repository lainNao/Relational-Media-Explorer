import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.global.css';

const HelloPage = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return <div>settings</div>;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HelloPage} />
        <Route path="/" component={SettingsPage} />
      </Switch>
    </Router>
  );
}

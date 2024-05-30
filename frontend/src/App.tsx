import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DomainSelection from './components/DomainSelection';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/select-domain" component={DomainSelection} />
      </Switch>
    </Router>
  );
}

export default App;

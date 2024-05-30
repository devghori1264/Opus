import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DomainSelection from './components/DomainSelection';
import SignUp from './auth/SignUp/signup';
import LogIn from './auth/LogIn/login';
import DomainSelect from './Selection_Service/DomainSelect';
import ServiceSelection from './Selection_Service/ServiceSelect';
import DatabaseSelection from './Selection_Service/DatabaseSelect';
import TrainModel from './TrainModel';
import TestModel from './TestModel';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-domain" element={<DomainSelection />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/domains" element={<DomainSelect />} />
        <Route path="/services" element={<ServiceSelection />} />
        <Route path="/databases" element={<DatabaseSelection />} />
        <Route path="/train" element={<TrainModel />} />
        <Route path="/test" element={<TestModel />} />
      </Routes>
    </Router>
  );
};

export default App;

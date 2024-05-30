import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Opus</h1>
      <Link to="/select-domain">Get Started</Link>
    </div>
  );
}

export default Home;

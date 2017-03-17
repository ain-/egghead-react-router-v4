import React from 'react';
import { BrowserRouter as Router,
  Route, Link } from 'react-router-dom';
import './App.css';

const Links = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route path="/:page" render={({match}) => (
        <h1>{match.params.page}</h1>)} />
    </div>
  </Router>
);

export default App;

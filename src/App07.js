import React from 'react';
import { BrowserRouter as Router,
  Route, Link } from 'react-router-dom';
import './App.css';

const Links = () => (
  <nav>
    <Link to="/">Inline</Link>
    <Link to={{pathname: '/'}}>Object</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route path="/" render={() => (
        <div>
          <p>root</p>
        </div>
      )} />
    </div>
  </Router>
);

export default App;

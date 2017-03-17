import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './App.css';

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
);

const BrowserRouterApp = () => (
  <BrowserRouter>
    <LinksRoutes />
  </BrowserRouter>
);

export default BrowserRouterApp;

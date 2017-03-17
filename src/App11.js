import React from 'react';
import { BrowserRouter as Router,
  Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (<h1>Home</h1>);
const Menu = () => (<h1>Menu</h1>);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
);

export default App;

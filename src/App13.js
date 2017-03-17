import React from 'react';
import { BrowserRouter as Router,
  Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (<h1>Home</h1>);
const Form = () => (<h1>Form</h1>);

const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
);

export default App;

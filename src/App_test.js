import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';


const App = () => (
  <BrowserRouter>
          <Switch>
              <Redirect exact from='/' to='/public'/>
              <Route path="/public" render={() => (<h1>Public</h1>)}/>
              <Route path="/login" render={() => (<h1>Login</h1>)}/>
              <Route path="/secured" render={() => (<h1>Secured</h1>)}/>
          </Switch>
  </BrowserRouter>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect  } from 'react-router-dom';

import './index.css';

import Medico from './pages/medico/medico';
import Login from './pages/login/login';
import NotFound from './pages/notFound/notFound';


import reportWebVitals from './reportWebVitals';

const routing = (  
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Medico} /> {/* tela - Login */} 
        <Route path="/login" component={Login} /> {/* Login */}
        {/* <Router path="/medico" component={Medico} /> {/* tela - medico/} */}
        <Route exact path="/notFound" component={NotFound}/> {/* notFound*/}
        <Redirect to = "/notFound"/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

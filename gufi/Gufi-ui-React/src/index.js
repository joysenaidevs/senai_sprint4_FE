import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect} 
from 'react-router-dom';

import './index.css';

import App from './pages/home/App';
import TiposEventos from './pages/tiposeventos/tiposEventos';
import NotFound from './pages/notFound/notFound';


import reportWebVitals from './reportWebVitals';



// construir uma constante para armazenar todas as rotas que teremos no sistema
const routing = (
  <Router>
    {/* componente que vai armazenar a logica de rotas */}
    <div>
      <Switch>
        {/* passamos o exact para uma pagina especifica, como a home */}
        <Route exact path="/" component={App} /> {/*  Home  */}
        <Route path="/tiposeventos" component={TiposEventos} /> {/*  Tipos de eventos */}
        <Route exact path="/notfound" component= {NotFound} /> {/*Not Found*/}
        <Redirect to = "/notfound" /> {/*Redirecionamos para NotFound caso não encontre nenhuma rota*/}
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

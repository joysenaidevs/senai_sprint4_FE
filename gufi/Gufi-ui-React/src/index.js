import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './index.css';

import App from './pages/home/App';
import TiposEventos from './pages/tiposeventos/tiposEventos';


import reportWebVitals from './reportWebVitals';



// construir uma constante para armazenar todas as rotas que teremos no sistema
 const routing = (
   <Router>
      {/* componente que vai armazenar a logica de rotas */}
     <div>
       <Switch>
        <Route path="/" component={App} /> {/*  Home  */}
        <Route path="/tiposeventos" component={TiposEventos} /> {/*  Tipos de eventos */}
       </Switch>
     </div>
   </Router>
 )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

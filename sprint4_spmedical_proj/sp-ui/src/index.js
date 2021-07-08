import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect  } from 'react-router-dom';

import './index.css';

import Medico from './pages/medico/medico';
import Administrador from './pages/administrador/administrador'
import TipoUsuario from './pages/tiposUsuarios/tiposUsuarios'
import Login from './pages/login/login';
import NotFound from './pages/notFound/notFound';
import Prontuarios from './pages/paciente/paciente';


import reportWebVitals from './reportWebVitals';
import { parseJwt, usuarioAutenticado } from './services/auth';

// logica de permissao para o acesso de paginas ex: usuario 1, 2 ou 3
const PermissaoAdm = ({component : Component}) => (
  <Route
    render = {props =>
      //caso esteja logado e o tipo dele seja administrador
      usuarioAutenticado() && parseJwt().role === "1" ?
      <Component {...props}/> :
      // caso nao seja um adm, redireciona para a pagina login
      <Redirect to = 'login'/>
    }
  />
)

const routing = (  
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} /> {/* Login */}
        <Route path="/prontuario" component={Prontuarios} />
        <Route path="/Administrador" component={Administrador} /> {/* tela do administrador*/} 
        <Route path="/medico" component={Medico} /> {/* tela de medicos */} 
        {/* <PermissaoAdm path="/tiposUsuarios" component={TipoUsuario} /> {/* tela do administrador*/}  
        <PermissaoAdm path="/tiposUsuarios" component={TipoUsuario} />

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

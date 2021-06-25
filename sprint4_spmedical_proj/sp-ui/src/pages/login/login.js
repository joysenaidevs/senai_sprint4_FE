import React, { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';


import "../../assets/css/login.css";
import { Link } from 'react-router-dom';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        }
    };

    // login = (event) => {

    //     event.preventDefault();

    //     this.setState({ erroMensagem: '', isLoading: true });

    //     axios.post('http://localhost:5000/api/login', {
    //         email: this.state.email,
    //         senha: this.state.senha
    //     })

    //         .then(resposta => {

    //             if (resposta.status === 200) {

    //                 localStorage.setItem('usuario-login', resposta.data.token);

    //                 console.log('Meu token é: ' + resposta.data.token);

    //                 this.setState({ isLoading: false })

    //                 let base64 = localStorage.getItem('usuario-login').split('.')[1];

    //                 console.log(base64);

    //                 console.log(window.atob(base64));

    //                 console.log(JSON.parse(window.atob(base64)));

    //                 console.log(parseJwt().role);

    //                 switch (parseJwt().role) {

    //                     case '1':
    //                         this.props.history.push('/administrador')

    //                         break;

    //                     case '2':
    //                         this.props.history.push('/paciente')

    //                         break;

    //                     case '3':
    //                         this.props.history.push('/medico')

    //                         break;

    //                     default:
    //                         this.props.history.push('/')
    //                         break;

    //                 }

    //                 console.log('estou logado: ' + usuarioAutenticado());
    //             }
    //         })

    //         .catch(() => {

    //             this.setState({ erroMensagem: 'E-mail ou senha inválidos! Tente novamente.', isLoading: false });
    //         })
    // }

    // atualizaStateCampo = (campo) => {
    //     this.setState({ [campo.target.name]: campo.target.value })
    // };

    render() {
        return (


            <div id="container-login">
             
                <section className="card-login">


                    <h1 id="h1-login">SP Medical Group</h1>

                    <h2 id="h2-login">Login</h2>

                    <form onSubmit={this.login}>

                        <div className="input-login">
                            <i className="material-icons">Email</i>
                            <input
                                required
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.atualizaStateCampo}
                                placeholder="Email" />
                        </div>

                        <div className="input-login">
                            <i className="material-icons">senha</i>
                            <input
                                required
                                type="password"
                                name="senha"
                                value={this.state.senha}
                                onChange={this.atualizaStateCampo}
                                placeholder="Senha" />
                        </div>

                        <p style={{ color: 'red', textAlign: 'center' }}>{this.state.erroMensagem}</p>

                        {
                            this.state.isLoading === true &&
                            <div className="justify-center">
                                <button id="btn-login" type="submit" disabled>Loading...</button>
                            </div>
                        }

                        {
                            this.state.isLoading === false &&
                            <div className="justify-center">
                                <button id="btn-login" type="submit" disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>Login</button>
                            </div>
                        }
                    </form>


                </section>

            </div>

        )
    }

};

export default Login;
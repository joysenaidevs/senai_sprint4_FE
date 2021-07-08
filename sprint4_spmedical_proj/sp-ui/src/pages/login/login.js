import React, { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';


import "../../assets/css/login.css";
//import { Link } from 'react-router-dom';



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

    // função para efetuar o login
    login = (event) => {

        // evitar o comportamento padrao do navegador
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        // Define a URL e o corpo da requisição
        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(resposta => {
                //se a resposta da requisição é 200
                if (resposta.status === 200) {

                    //Armazenamento local do navegador 
                    localStorage.setItem('usuario-login', resposta.data.token);

                    //exibição no console
                    console.log('Meu token é: ' + resposta.data.token);

                    this.setState({ isLoading: false })
                
                    // Define a variável base64 que vai receber o payload do token
                    //let base64 = localStorage.getItem('usuario-login').split('.')[1];

                    // // Exibe no console o valor presente na variável base64
                    // console.log(base64);

                    // // Exibe no console o valor convertido de base64 para string
                    // console.log(window.atob(base64));

                    // // Exibe no console o valor convertido da string para JSON
                    // console.log(JSON.parse(window.atob(base64)).email);
                    // console.log(JSON.parse(window.atob(base64)));

                    // // Exibe no console apenas o tipo de usuário logado
                    console.log(parseJwt());


                    // verifica se o tipo de usuario logado é Administrador
                    // se for, redireciona para a página de Consultas e listas
                    // if(parseJwt().role === '1'){
                    //     this.props.history.push('/administrador');
                    //     console.log('estou logado:' + usuarioAutenticado());
                    // }

                    // // se nao for , redireciona para a página home
                    // else{
                    //     this.props.historypush('/')
                    // }

                    switch (parseJwt().role) {

                        case '1':
                            // empurrando o acesso para a tela Administrador
                            this.props.history.push('/administrador')

                            break;

                        case '2':
                            // empurrando o acesso para a tela prontuarios
                            this.props.history.push('/prontuario')

                            break;

                        case '3':
                            // empurrando o acesso para a tela medico
                            this.props.history.push('/medico')

                            break;

                        default:
                            this.props.history.push('/')
                            break;

                    }

                    console.log('estou logado: ' + usuarioAutenticado());
                }
            })

            //caso haja erro
            //tratamento caso erro o email e a senha, para melhor experiência no usuario
            .catch(() => {

                this.setState({ erroMensagem: 'E-mail ou senha inválidos! Tente novamente.', isLoading: false });
            })
    }

    // funçao que atualiza os states de acordo com os inputs, pode ser em varios inputs diferentes
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };

    //renderiza a tela
    render() {
        return (
            <div id="container-login">
             
                <section className="card-login">

                    <h1 id="h1-login">SP Medical Group</h1>

                    <h2 id="h2-login">Login</h2>

                    {/* Faz a chamada para a função de login quando o botão é pressionado */}
                    <form onSubmit={this.login}>

                        <div className="input-login">
                            <i className="material-icons">Email</i>

                            {/* Input de email */}
                            <input
                                required
                                //Email
                                type="email"
                                name="email"
                                // valor do state email
                                value={this.state.email}
                                // fazendo a chamada pra função pra atualizar o state
                                onChange={this.atualizaStateCampo}
                                placeholder="Open" />
                        </div>

                        <div className="input-login">
                            <i className="material-icons">senha</i>

                            {/* input de senha */}
                            <input
                                required
                                //senha
                                type="password"
                                name="senha"
                                // define o input senha recebe o valor do state senha
                                value={this.state.senha}
                                onChange={this.atualizaStateCampo}
                                placeholder="password" />
                        </div>
                        
                        {/* Exibe a mesangem de erro ao tentar logar com credenciais inválidas */}
                        <p style={{ color: 'red', textAlign: 'center' }}>{this.state.erroMensagem}</p>

                        {/* Verifica se a requisição está em andamento, se estiver desabilita o botão */}
                        
                        {
                            //caso seja true, renderiza o botão desabilitado com o texto:
                            this.state.isLoading === true &&
                            <div className="justify-center">
                                <button id="btn-login" type="submit" disabled>Waiting...</button>
                            </div>
                        }

                        {
                            //caso falso : renderiza o botão habilitado com o texto "Login"
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
import { Link } from 'react-router-dom';
import axios from 'axios';

import {React, Component} from 'react';


import "../../assets/css/style.css";

export default class Medico extends Component{
    constructor(props){
        super(props);
        this.state = {
            //nome    valorInicial
            idMedico: 0,
            idEspecialidade: 0,
            idClinica: 0,
            nomeMedico: '',
            email: '',
            listaConsultas : [],
            descricao : ''
        }
    };

    // está função é responsavel pela requisição e a lista de consultas
    buscarConsultas = () => {
        //quando é do tipo get, não é necessario passar o tipo GET usando axios na chamada da API/ passamos POST
        axios.post('http://localhost:5000/api/consultas', {
            hearders : {
                //headers da requisição
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            } 
        })

        .then(response => {
            // caso a requisição retorne 200 ,
            if  (response.status === 200) {     
                //atualiza o state listaConsultas //  resposta da requisição  
                this.setState({ listaConsultas : response.data })

                console.log(this.state.listaConsultas)
            }
        })

        //caso ocorra algum erro
        .catch(erro => console.log(erro))


    }


    componentDidMount(){

    };

    render(){

        return(
            <div>
                <main>
                    <section className="secao-medico">
                        {/* Lista de consultas */}
                            <Link className="telalogin-nav-login" to="login" >Sair</Link>
                        <h2>Lista de consultas</h2>
                        <table className="secao-tabela">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Medico</th>
                                    <th>Data da consulta</th>
                                    <th>situação</th>
                                    <th>Paciente</th>
                                </tr>
                            </thead>
                        </table>
                    </section>
                </main>
               
            </div>
        )
    }
}




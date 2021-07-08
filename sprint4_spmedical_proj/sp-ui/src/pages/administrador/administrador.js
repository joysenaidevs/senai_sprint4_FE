import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../assets/css/style.css';


export default function Administrador() {


    // states para o cadastro das consultas
    const [idProntuario, setIdProntuario] = useState(0)

    const [idMedico, setIdMedico] = useState(0)

    const [dataConsulta, setDataConsulta] = useState(new Date())

    const [situacao, setIdSituacao] = useState(0)

    const [isLoading, setIsLoading] = useState(false)


    // setStates para a listagem das consultas
    const [listaConsultas, setListaConsultas] = useState([])

    const [listaMedicos, setListaMedicos] = useState([])

    const [listaProntuarios, setListaProntuarios] = useState([])


    //funções

    // buscar todas consultas cadastradas
    function getConsultas() {
        axios.get('http://localhost:5000/api/Consultas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta => {
            if (resposta.status === 200) {

                setListaConsultas(resposta.data)
            }
        })
        .catch(erro => console.log(erro))
    }

    // buscar médico
    function getMedicos() {
        axios.get('http://localhost:5000/api/Medicos', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {

                    setListaMedicos(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }

    // buscar paciente
    function getProntuarios() {
        axios.get('http://localhost:5000/api/Prontuarios', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {

                    setListaProntuarios(resposta.data)
                }
            })
            .catch(erro => console.log(erro))
    }


    //cadastrar.consulta
    function postConsultas(event) {

        event.preventDefault()

        setIsLoading(true)

        axios.post('http://localhost:5000/api/Consultas', {
            idProntuario: idProntuario,
            idMedico: idMedico,
            dataConsulta: new Date(dataConsulta),
            situacao : situacao
    }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
        }
    })

        .then(resposta => {

            if (resposta.status === 201) {

                console.log('Consulta cadastrada!')

                setIsLoading(false)

                getConsultas();
            }
        })

        .catch(erro => {
            console.log(erro)
            setIsLoading(false)
        })

    };


    // funções para ciclos de vida 
    useEffect(getConsultas, [])

    useEffect(getMedicos, [])

    useEffect(getProntuarios, [])

    return (

        <div className="pg-adm container">

            <header>
                <Link to='/login' className="material-icons-sair">Sair</Link>
            </header>


            <div className="conteudo-adm">

                <section className="cadastro">

                    <h2 className="sub-titulo">Cadastro de Consultas </h2>

                    <form id="cadastro-consulta" onSubmit={postConsultas}>

                        <div className="campos">

                            <p>Paciente</p>

                            <select

                                name="idProntuario"
                                value={idProntuario}
                                onChange={(event) => setIdProntuario(event.target.value)}
                            >
                                <option value="0">Paciente</option>

                                {
                                    listaProntuarios.map(prontuario => {
                                        return (
                                            <option key={prontuario.idProntuario} value={prontuario.idProntuario}>
                                                {prontuario.nomeProntuario}
                                            </option>
                                        )
                                    })
                                }

                            </select>

                        </div>

                        <div className="campos">

                            <p>Médico</p>

                            <select

                                name="idMedico"
                                value={idMedico}
                                onChange={(event) => setIdMedico(event.target.value)}
                            >
                                <option value="0">Médico</option>

                                {
                                    listaMedicos.map(medico => {
                                        return (
                                            <option
                                                key={medico.idMedico}
                                                value={medico.idMedico}>
                                                {medico.nomeMedico} - {medico.idEspecialidadeNavigation.nomeEspecialidade}
                                            </option>
                                        )
                                    })
                                }

                            </select>

                        </div>

                        <div className="campos">

                            <p>Data</p>

                            <input

                                type="date"
                                name="dataConsulta"
                                value={dataConsulta}
                                onChange={(event) => setDataConsulta(event.target.value)}
                                placeholder="Data Consulta"

                            />

                        </div>

                        <div className="campos">

                            <p>Status</p>

                            <select
                                name="idSituacao"
                                value={situacao}
                                onChange={(event) => setIdSituacao(event.target.value)}

                            >
                                <option value="1">Agendado</option>
                                <option value="2">Cancelado</option>
                                <option value="3">Realizado</option>

                            </select>

                        </div>

                        <div id="btn-cadastrar">
                            {
                                isLoading === true &&
                                <button id="btn-adm" type="submit" disabled>
                                    Cadastrando...
                                </button>
                            }



                            {
                                isLoading === false &&
                                <button id="btn-salvar-consultas" className="material-icons" type="submit">
                                    Salvar Consulta
                                </button>
                            }
                        </div>




                    </form>

                </section>

                

                <section id="historico-consulta">

                    <h2 className="sub-titulo">Listar Consultas </h2>

                    <table id="table-adm">

                        <thead>

                            <tr>
                                <th>Paciente</th>
                                <th>Médico</th>
                                <th>Especialidade</th>
                                <th>Data</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                listaConsultas.map((consulta) => {
                                    return (
                                        <tr key={consulta.idConsulta}>
                                            <td>{consulta.idProntuarioNavigation.nomeProntuario}</td>
                                            <td>{consulta.idMedicoNavigation.nomeMedico}</td>
                                            <td>{consulta.idMedicoNavigation.idEspecialidadeNavigation.nomeEspecialidade}</td>
                                            <td>{new Date(consulta.dataConsulta).toLocaleDateString()}</td>
                                            <td>{consulta.idSituacaoNavigation.situacao}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </section>
            </div>
        </div>
    )
}



import { Component } from 'react';

class Prontuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            // nomeEstada : valor
            prontuario : [],
            nomeProntuario : '',
            dataNascimento : '',
            telefone : '',
            rg : '',
            cpf : '',
            endereco : '',
            idProntuarioAlterado : 0
        }
    }

    //chamada para as funções de cadastrar  :

    // event : (paciente)
    // atualizamos o estado nomeProntuario
    atualizarNomePaciente = async (paciente) => {
       await this.setState({ nomeProntuario : paciente.target.value })
        console.log(this.state.nomeProntuario)
       
    };

    // função responsavel por cadastrar um prontuario
    cadastrarProntuarios = (event) => {
        // ignora o comportamento padrão do navegador
        event.preventDefault();

        //Faz a chamada para a API usando fetch
        fetch('http://localhost:5000/api/Prontuarios',{  

            //definindo verbo da requisição (POST)
            method : 'POST',

            // define que o corpo da requisição especificando o tipo (JSON)
            //CONVERTE O STATE PARA UMA STRING JSON
            body : JSON.stringify( {nomeProntuario : this.state.prontuario} ),

            //define o cabeçario da requisição
            headers : {
                "Content-Type" : "application/json"
            }
        })

        // Exibe no console do navegador a mensagem : ()
        .then(console.log("Prontuario cadastrado!"))

        //caso ocorra algum erro, exibe no console do navegador
        .catch( erro => console.log(erro) )

        // atualiza a lista de prontuarios sem o usuarios precisar executar nada
        .then(this.buscarProntuarios)

        // Faz a chamada para a função limparCampos
        .then(this.limparCampos)
    }

    buscarProntuarios = () => {
        // renderização
        console.log('Agora vamos renderizar prontuario')

        // chamada para API utilizando fetch()      Lembrete : executar um dotnet run na program da API

        // o fetch por padrão faz o GET 
        fetch('http://localhost:5000/api/Prontuarios')

        // trazendo a promisses: .then(), .catch()
        // as promisses se resolve numa resposta (response)
        //.then(resposta => console.log(resposta))

        //o método .json retorna um objeto JavaScript
        //.then(resposta => console.log(resposta.json()))

        //definindo que o tipo de dado do retorno será em json
        .then(resposta  => resposta.json())

        //um array com todos os dados vindos da API
        //.then(data => console.log(data))

        // atualiza o state com os dados obtidos
        .then(data => this.setState( { prontuario : data } ))

        //caso dê algum erro será visualizado no console do navegador
        .catch( (erro) => console.log(erro) )

    }

    
    //chama a funcao prontuarios assim que o componente é renderizado
    componentDidMount(){
        // está mostrando a mensagem no console
        this.buscarProntuarios();
    }

    //recebe um prontuario da lista
    // chamamos a função recebendo como parametro todos os dados de prontuarios
    buscarProntuarioId = (prontuario) => {
        // atualizando o state
        this.setState({
            //nome                  valor
            idProntuarioAlterado :  prontuario.idProntuario,

            //atualizamos o titulo
            nomeProntuario : prontuario.nomeProntuario,

            //atualizamos a data
            dataNascimento : prontuario.dataNascimento,

            //atualizamos o telefone
            telefone : prontuario.telefone,

            //atualizamos o rg
            rg : prontuario.rg,

            //atualizamos o cpf
            cpf : prontuario.cpf,

            //atualizamos o endereco
            endereco : prontuario.endereco
        }, () => {
            console.log(
                // exibe no console do navegador o valor do id de prontuario recebido
                'O paciente ' + prontuario.idProntuario + 'foi selecionado,',

                // o valor do state idProntuarioAlterado
                'agora o valor do state idProntuarioAlterado é: ' + this.state.idProntuarioAlterado,

                // e o valor do state do nomeProntuario
                'e o valor do state paciente é:' + this.state.nomeProntuario,

                // valor do state dataNascimento
                'e o valor do state dataNascimento é :' + this.state.dataNascimento,

                //e o valor do state telefone 
                'e o valor do state telefone é :' + this.state.telefone,

                //e o valor do state rg
                'e o valor do state rg é :' + this.state.rg,

                // e o valor do state cpf 
                'e o valor do state cpf é :' + this.state.cpf

            )
        } )
    }
    
    // função que vai resetar os states nomeProntuario e idProntuarioAlterado
    limparCampos = () => {
        // setState(altera o valor do state)
        this.setState({
            nomeProntuario : '',
            idProntuarioAlterado : 0
        })

        // exibe no console do navegador a mensagem :
        console.log('O nome do paciente foi resetado!')
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        {/*Prontuarios*/}
                        <h2>Prontuario do Paciente</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>informaçoes do paciente</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    //          ARRAY
                                    this.state.prontuario.map( (prontuarios) => {
                                            return (
                                                <tr key ={prontuarios.idProntuario}>
                                                    <td>{prontuarios.idProntuario}</td>
                                                    <td>{prontuarios.nomeProntuario}</td>
                                                    <td>{prontuarios.dataNascimento}</td>
                                                    <td>{prontuarios.endereco}</td>
                                                    <td>{prontuarios.rg}</td>
                                                    <td>{prontuarios.cpf}</td>
                                                    <td>{prontuarios.telefone}</td>

                                                    {/* Faz a chamada para a função buscarProntuarioId passando o prontuario selecionado */}
                                                    <td><button onClick={() => this.buscarProntuarioId(prontuarios)}>Editar</button></td>

                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        {/*Cadastro de pacientes DIDATICA DE CADASTRO (Não incluir para prontuario)*/}
                        <h2>Cadastro de prontuario</h2>
                        {/*Formulario de cadastro de pacientes*/}
                        <form onSubmit={this.cadastrarProntuarios}>
                            <div>
                                <input
                                    type="text"
                                    value={this.state.nomeProntuario}
                                    onChange={this.atualizarNomePaciente}
                                    placeholder="Nome do Paciente"
                                />
                                {/*BOTÃO DE CADASTRO APENAS PARA CADASTRAR*/}
                                {/*<button type="submit">Inserir Nome</button>*/}

                                {/* altera o botão de acordo com a operação usando ifternario */}
                                {/*Estrutura do IF ternário*/}
                                {/* condição ? se sim faço algo caso verdadeiro : faço algo caso falso */}

                                {/* {
                                    // condição : esse idProntuarioAlterado é igual a 0?
                                    this.state.idProntuarioAlterado === 0 ? 
                                    <button type="submit">Cadastrar</button> : 
                                    <button type="submit">Editar</button>
                                } */}

                                
                                <button type="submit" disabled={this.state.nomeProntuario === '' ? 'none' : '' }> 
                                    {
                                       this.state.idProntuarioAlterado === 0 ? 'Cadastrar' : 'Editar'     
                                    }
                                </button>

                                {/* fazendo a chamada da função limparCampos (zerar o nome e colocar o id como zero) */}
                                    <button type="button" onClick={this.limparCampos}>Cancelar
                                    
                                    </button>

                                {/* Para que eu não consiga clickar no botão : */}

                                {/* <button disabled ={true} type="submit">Cadastrar</button> : 
                                <button type="submit">Editar</button> */}


                            </div>

                            <div>
                                <input
                                    type="text"
                                    value={this.state.dataNascimento}
                                    onChange={this.atualizarDataNascimento}
                                    placeholder="Data de nascimento"
                                />
                                <button>Data de nascimento</button>
                            </div>
                        </form>
                    </section>
                </main>

            </div>
        )
    }
}

export default Prontuarios;
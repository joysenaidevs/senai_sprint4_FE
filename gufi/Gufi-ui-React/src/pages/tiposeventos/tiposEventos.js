import { Component } from 'react';

class TiposEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            // estrutura
            //nome do estado : valor inicial ( um array vazio)
            listaTiposEventos : [],
            titulo : ''
        }
    } 


    // intrução de campos de classe
    buscarTiposEventos = () => {
        console.log('agora vamos fazer a chamada para a API')


        // utilizamos o fetch para trazer os dados da API (fazendo a chamada)
        //   url da api(endereço)
        // rodamos a API através do prompt de comando(CMD) e fazemos a consulta da própia no swagger UI
        fetch('http://localhost:5000/api/tiposeventos')

        // Fetch retorna uma promisse que se resolve em uma resposta ( response)
        // .then(resposta => console.log(resposta))


        // o método .json() retorna um objeto JavaScript
        // .then(resposta => console.log(resposta.json()))

        //traremos as promisses / define o tipo do dado do retorno da requisição em Json
        .then(resposta => resposta.json())

        // o data irá trazer, somente os dados que estão vindo da API
        //  .then(data => console.log(data))

        // adicionaremos outra promisse
        // atualiza o state listaTiposEventos com os dados obtidos
        .then(data => this.setState({ listaTiposEventos : data })) 

        // outra promisse
        //caso ocorra alguma erro, mostra no console
        .catch(( erro ) => console.log(erro))
    }

    // o usuario ao entrar na pagina vai aparecer a lista de eventos
    // chamada para a funcao buscarTiposEventos assim q o componente é renderizado
    
    atualizaEstadoTitulo  = (event) => {
        this.setState({ titulo : event.target.value })
        console.log(this.state.titulo)
    };


    componentDidMount(){
        //código
        //chamada para função
        this.buscarTiposEventos();
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        {/* Lista de tipos eventos */}
                        <h2>Lista de tipos eventos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>titulo</th>
                                </tr>
                                
                            </thead>


                            <tbody>
                                {/* Fazer uma varredura do array, chamando o state */}
                                {
                                    //              array      função/elemento q representa cada um dos elementos
                                    this.state.listaTiposEventos.map((tipoEvento) => {
                                        return (
                                            <tr key={tipoEvento.idTipoEvento}>
                                                <td> {tipoEvento.idTipoEvento} </td>
                                                <td> {tipoEvento.tituloTipoEvento } </td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        {/* Cadastro de tiposEventos */}
                        <h2>Cadastro de Tipo de Evento</h2>

                        {/* formulario de cadastro de Tipo de Evento */}
                        <form onSubmit={this.cadastrarTipoEvento}>
                            <div>
                                <input 
                                    type="text"
                                    value={this.state.titulo}
                                    onChange={this.atualizaEstadoTitulo}
                                    placeholder="Título do Tipo de Evento"
                                />

                                <button typer="submit">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        );
    }
}

export default TiposEventos;
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

    buscarTiposEventos = () => {
        console.log('agora vamos fazer a chamada para a API')
    }

    // o usuario ao entrar na pagina vai aparecer a lista de eventos
    // chamada para a funcao buscarTiposEventos assim q o componente é renderizado
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
                                    this.state.listaTiposEventos.map( (tipoEvento) => {
                                        return (
                                            <tr key={tipoEvento.TiposEventoId}>
                                                <td> {tipoEvento.TiposEventoId} </td>
                                                <td> {tipoEvento.titulo } </td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        );
    }
}

export default TiposEventos;
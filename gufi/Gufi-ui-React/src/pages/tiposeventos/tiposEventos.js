import { Component } from 'react';

class TiposEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            // estrutura
            //nome do estado : valor inicial ( um array vazio)
            listaTiposEventos : [ { TiposEventoId : 1, titulo : 'C#' }, { TiposEventoId : 2, titulo : 'React' } ],
            titulo : ''
        }
    }

    componentDidMount(){
        //código
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
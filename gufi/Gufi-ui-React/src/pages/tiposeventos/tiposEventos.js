import { Component } from 'react';

class TiposEventos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // estrutura
            //nome do estado : valor inicial ( um array vazio)
            listaTiposEventos : [  ],
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
                        </table>
                    </section>
                </main>
            </div>
        );
    }
}
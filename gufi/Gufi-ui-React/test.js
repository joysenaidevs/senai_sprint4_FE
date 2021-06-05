this.state.listaTiposEventos.map( (tipoEvento) => {
    return (
        <tr key={tipoEvento.idTipoEvento}>
            <td> {tipoEvento.idTipoEvento} </td>
            <td> {tipoEvento.tituloTipoEvento } </td>
        </tr>
    )
} )
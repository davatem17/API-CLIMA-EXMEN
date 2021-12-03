import React, {useState} from 'react'
import styled from '@emotion/styled';
const Titulo = styled.h3`
    text-align: left;
    color: white;
`;
const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
    // extraer ciudad 
    const { ciudad } = busqueda;

    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }
    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();
        guardarConsultar(true);
    }
    return ( 
        <form
        onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="container">
                <Titulo>Ciudad: </Titulo>
                    <select
                    class="form-select" aria-label="Default select example"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione una ciudad --</option>
                        <option value="Ambato">Ambato</option>
                        <option value="Quito">Quito</option>
                        <option value="Guayaquil">Guayaquil</option>
                        <option value="Latacunga">Latacunga</option>
                        <option value="Cuenca">Cuenca</option>
                    </select>
                </div>
            </div><br/>
            <div className="row">
            <div className="input-field col s12">
                    <button
                        type="submit"
                        className="btn btn-danger"
                    >Buscar Clima</button>
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;
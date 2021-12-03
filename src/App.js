import logo from './logo.svg';
import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import styled from '@emotion/styled';

function App() {
  const port = process.env.PORT || 3000;
  require('dotenv').config();

   // state del formulario
   const [busqueda, guardarBusqueda] = useState({ 
    ciudad: ''
    
});
const [consultar, guardarConsultar] = useState(false);
const [resultado, guardarResultado] = useState({});
const [error, guardarError] = useState(false);
const pais = "EC";
const { ciudad } = busqueda;
useEffect(() => {
  const consultarAPI = async () => {

      if(consultar) {
        const appId = process.env.REACT_APP_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

      }
      
  }
  consultarAPI();
  },[consultar]);

  const Principal = styled.div`
    padding: 3rem 1rem 1rem 1rem;
    background-color: #ffc107;
  `;
  return (
    <Fragment>
      <Header/>
      <Principal>
      <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
            <Clima 
                  resultado={resultado}
              />
            </div>
          </div>
        </div>
      </Principal>
    </Fragment>
  );
}

export default App;

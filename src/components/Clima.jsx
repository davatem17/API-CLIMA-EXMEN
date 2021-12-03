import React from 'react';
import styled from '@emotion/styled';
const Datos = styled.h5`
    color: white;
`;
const Titulo = styled.h2`
    color: white;
`;
const Clima = ({resultado}) => {
    // extraer los valores
    const { name, main, weather } = resultado;
    console.log(resultado);
    if(!name) return null;
    // Grados kelvin
    const kelvin = 273.15;
    var url = "http://openweathermap.org/img/w/"+  weather[0].icon+".png" ;
    return ( 
        
        <div className="container bg-primary">
            <div className="white-text">
                
                <Titulo>El clima de {name} es: </Titulo>
                <Datos >
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </Datos>
                <img src={url} alt="" />
                <Datos>Temperatura Máxima:
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </Datos>
                <Datos>Temperatura Minima:
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) }  <span> &#x2103; </span>
                </Datos>
                <Datos>Humedad: 
                     { parseFloat( main.humidity, 10 ).toFixed(2)} % 
                </Datos>
                <Datos>Presión:
                    { parseFloat( main.pressure, 10 ).toFixed(2)} milibares 
                </Datos>
            </div>
        </div>
     );
}


export default Clima;
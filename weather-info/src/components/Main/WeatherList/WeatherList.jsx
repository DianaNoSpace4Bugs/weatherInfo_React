import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCard";
import { v4 as uuidv4 } from "uuid";


const WeatherList = () => {
  const [inputCiudad, setInputCiudad] = useState("Madrid");
  const [dataTiempo, setDataTiempo] = useState([]);

  const llamadaApi = async function fetchData() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCiudad}&units=metric&appid=5111179d8b863c7c9d6d5b977a924b21`);
      const data = response.data;

      const dataDatos = data.list.map(item => ({
        key: { uuidv4 },
        fecha: item.dt * 1000,
        tiempo: item.dt_txt.split(' ')[1],
        temperatura: item.main.temp,
        weather: item.weather[0].main,
        viento: item.wind,
      }));
      console.log(dataDatos);

      setDataTiempo(dataDatos);
    } catch (error) {
      console.error("Error fetching weather data", error);
      setDataTiempo([]);
    }

    return llamadaApi;
  }

  useEffect(() => {
    llamadaApi();
  }, [inputCiudad]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const ciudadNueva = event.target.querySelector("input").value.trim();
    if (ciudadNueva) {
      setInputCiudad(ciudadNueva);
    }
    llamadaApi();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name="ubicacion" placeholder='Ciudad, País' />
        <br />
        <button type="submit">Buscar</button>
      </form>

      <h4>El tiempo en {inputCiudad.toUpperCase()}:</h4>
      {dataTiempo.length !== 0 ? (
        <div>
          {dataTiempo.map((data, index) => (
            <WeatherCard
              key={index}
              data={data}
            />
          ))}
        </div>
      ) : <p>No se encontraron datos para la ciudad especificada.</p>}
    </section>
  );
};

export default WeatherList;
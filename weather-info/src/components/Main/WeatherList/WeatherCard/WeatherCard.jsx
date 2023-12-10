import React from 'react';

const WeatherCard = ({ data }) => {
  const { fecha, tiempo, temperatura, weather, viento } = data;

  return (
    <>
    <section id='card'>
      <h1>{new Date(fecha).toLocaleDateString()}</h1>
      <p id='1'>Hora: {tiempo}</p>
      <p id='2'>Temperatura: {temperatura}°C</p>
      <p id='3'>Tiempo: {weather}</p>
      <p id='4'>Viento: {viento.speed} m/s</p>
    </section>
    </>
  );
};

export default WeatherCard;
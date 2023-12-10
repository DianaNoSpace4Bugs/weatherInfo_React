import React from 'react';

const WeatherCard = ({ data }) => {
  const { fecha, tiempo, temperatura, weather, viento } = data;

  return (
    <>
    <section>
      <h5>{new Date(fecha).toLocaleDateString()}</h5>
      <p>Hora: {tiempo}</p>
      <p>Temperatura: {temperatura}°C</p>
      <p>Tiempo: {weather}</p>
      <p>Viento: {viento.speed} m/s</p>
    </section>
    </>
  );
};

export default WeatherCard;
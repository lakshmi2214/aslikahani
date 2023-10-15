import React from 'react';

const Weather = () => {
  // Simulated weather data
  const weatherData = {
    city: 'Malleshwaram Bengaluru',
    temperature: 31,
    condition: 'Sunny',
  };

  return (
    <div>
      <h1>Current Weather</h1>
      <p>City: {weatherData.city}</p>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Weather: {weatherData.condition}</p>
    </div>
  );
};

export default Weather;


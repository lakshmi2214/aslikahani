import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="weather-container">
      <h3>Weather Forecast</h3>
      <label>City:</label>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label>Temperature (°C):</label>
      <input
        type="text"
        placeholder="Enter temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        placeholder="Enter weather description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="weather-info">
        <h2>City: {city}</h2>
        <p>Temperature: {temperature}°C</p>
        <p>Weather: {description}</p>
      </div>
    </div>
  );
}

export default Weather;

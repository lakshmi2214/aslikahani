import React, { useState } from 'react';
// import "./forecast.css";
import "./weatherReport.css"

function CurrentWeather() {
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState('');

  const apiKey = "4d8fb5b93d4af21d66a2948710284366";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the input is empty
    if (!inputValue) {
      setMessage('Please enter a city name');
      return;
    }

    // Check if the city is already in the list
    if (cities.some(city => city.name.toLowerCase() === inputValue.toLowerCase())) {
      setMessage(`You already know the weather for ${inputValue}...otherwise be more specific by providing the country code as well 😉`);
      setInputValue('');
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      const { main, name, sys, weather } = data;

      const newCity = {
        name: `${name}, ${sys.country}`,
        temperature: Math.round(main.temp),
        icon: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`,
        description: weather[0].description,
      };

      setCities([...cities, newCity]);
      setInputValue('');
      setMessage('');
    } catch (error) {
      setMessage('Please search for a valid city 😩');
    }
  };

  return (
    <div>
        <div className='bg-weather'>
      <section className="top-banner">
        <div className="containers">
          <h1 className="heading">Weather</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city"
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">SUBMIT</button>
            <span className="msg">{message}</span>
          </form>
        </div>
      </section>
      <section className="ajax-section">
        <div className="containers">
          <ul className="cities">
            {cities.map((city, index) => (
              <li key={index} className="city">
                <h2 className="city-name" style={{color:"white"}} data-name={city.name}>
                  <span>{city.name.split(',')[0]}</span>
                  <sup>{city.name.split(',')[1]}</sup>
                </h2>
                <div className="city-temp"style={{color:"white"}} >
                  {city.temperature}<sup>°C</sup>
                </div>
                <figure>
                  <img className="city-icon" style={{color:"white", fontWeight:"bold"}} src={city.icon} alt={city.description} />
                  <figcaption style={{color:"white"}}>{city.description}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </div>
    </div>
  );
}

export default CurrentWeather;

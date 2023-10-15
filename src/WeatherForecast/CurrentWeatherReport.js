import React, { useState, useEffect } from 'react';
import "./weather.css";

function CurrentWeatherReport() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the date every minute
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div>
      <article className="widgets">
        <div className="weatherIcon"></div>
        <div className="weatherData">
          <h1 className="temperature h1">31&deg;</h1>
          <h2 className="description h2">Partly Cloudy</h2>
          <h3 className="city h3">Malleshwara, Bengaluru
</h3>
        </div>
        <div className="date">
          <h4 className="month h4">{months[currentDate.getMonth()]}</h4>
          <h5 className="day h5">{currentDate.getDate()}</h5>
        </div>
      </article>
    </div>
  );
}

export default CurrentWeatherReport;

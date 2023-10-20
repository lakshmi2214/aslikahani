import ReactWeather, { useVisualCrossing } from 'react-open-weather';


const WeatherApp = () => {
  const { data, isLoading, errorMessage } = useVisualCrossing({
    key: 'K5Q9L49GM6H3LP7JWE2TC87A2',
    lat: '12.971599',
    lon: '77.594566',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Bengaluru"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
export default WeatherApp;
// import ReactWeather, { useVisualCrossing  } from 'react-open-weather';

// const WeatherApp = () => {
//   const { data, isLoading, errorMessage } = useVisualCrossing({
//     key: 'K5Q9L49GM6H3LP7JWE2TC87A2',
//     lat: '48.137154',
//     lon: '11.576124',
//     lang: 'en',
//     unit: 'metric', // values are (metric, standard, imperial)
//   });
//   return (
//     <ReactWeather
//       isLoading={isLoading}
//       errorMessage={errorMessage}
//       data={data}
//       lang="en"
//       locationLabel="Munich"
//       unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
//       showForecast
//     />
//   );
// };
// export default WeatherApp;
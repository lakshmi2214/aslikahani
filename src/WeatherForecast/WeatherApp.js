import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherApp = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f6cbd7f0b1f92dc61d65f42c85f50656',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
export default WeatherApp;
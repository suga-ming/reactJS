const WeatherBox = ({ weather }) => {
  if (!weather) {
    return <div>로딩중</div>;
  }
  return (
    <div className="weather_box">
      <div className="area">{weather?.name}</div>
      <div className="temperature">{weather?.main.temp}°c</div>
      <div className="weather">{weather?.weather[0].description}</div>
    </div>
  );
};

export default WeatherBox;

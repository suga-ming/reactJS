import { useEffect, useState } from "react";
import "./weather.css";
import WeatherBox from "./weatherBox";
import WeatherButton from "./WeatherButton";

const API_KEY = "de49f1b27238e4df2be879a8764c4f57";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [apiEroor, setAPIEroor] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherCity(city);
    }
  }, [city]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
      setCity("");
    });
  };

  const getWeather = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    } catch (err) {
      setAPIEroor(err.message);
    }
  };

  const getWeatherCity = async (city) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    } catch (err) {
      setAPIEroor(err.message);
    }
  };

  return (
    <>
      {!apiEroor ? (
        <div className="box">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      ) : (
        apiEroor
      )}
    </>
  );
};

export default Weather;

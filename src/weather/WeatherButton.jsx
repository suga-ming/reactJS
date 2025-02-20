const WeatherButton = ({ cities, setCity, getCurrentLocation }) => {
  return (
    <div className="button_box">
      <button onClick={getCurrentLocation} className="buttons">
        Current Location
      </button>
      {cities.map((item, index) => (
        <button
          key={index}
          className="buttons"
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;

import useWeatherAPI from "../../../../services/useWeatherAPI";
import Day from "./day/Day";
import "./Weather.scss";
function WeatherWidget({ latitude, longitude }) {
  const weather = useWeatherAPI({
    latitude: latitude,
    longitude: longitude,
  });

  return (
    <>
      {weather.cod != "400" && weather?.list != undefined ? (
        <div className={"weather"}>
          <Day weather={weather} list={weather.list} index={0} current={true} />
          <Day weather={weather} list={weather.list} index={1} />
        </div>
      ) : (
        <>Cargando</>
      )}
    </>
  );
}

export default WeatherWidget;

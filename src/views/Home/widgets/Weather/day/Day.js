import "./Day.scss";

export default function Day({ weather, list, index, current }) {
  const day = list[index];
  const info = day.weather[0];
  const temperature = day.main;
  const data = {
    icon: `https://openweathermap.org/img/wn/${info.icon}@2x.png`,
    main: info.main,
    description: info.description,
    temp: Math.floor(temperature.temp),
    temp_min: Math.floor(temperature.temp_min),
    temp_max: Math.floor(temperature.temp_max),
    humidity: temperature.humidity,
  };
  return (
    <div className={"day"}>
      <div>
        {current ? (
          <h3>
            <strong>{weather?.city?.name}</strong>
          </h3>
        ) : (
          <h4>Ma&ntilde;ana</h4>
        )}
        <img src={data.icon} alt={data.description} />
      </div>
      <div className={"temperature"}>
        <p>
          <strong>{data.temp}°</strong>
        </p>
        <p>
          <span>{data.temp_min}°</span>
          &nbsp;/&nbsp;
          <span>{data.temp_max}°</span>
        </p>
        <p className={"legend"}>
          <span>Min.</span>&nbsp;/&nbsp;<span>Max.</span>
        </p>
      </div>
      <div className={"description"}>
        <p>
          <strong>{data.description}</strong>
        </p>
        <p>Humedad: {data.humidity}%</p>
      </div>
    </div>
  );
}

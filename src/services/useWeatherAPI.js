import useRequest from "./useRequest";
const API =
  "https://api.openweathermap.org/data/2.5/forecast?appid=56d2950b57ada689203309ff63bf6d57&lang=es&units=metric";

const useWeatherAPI = function ({ latitude, longitude }) {
  const [data, error] = useRequest(`${API}&lat=${latitude}&lon=${longitude}&`);
  let weather = "";
  if (data) {
    weather = JSON.parse(data);
  } else if (error) {
    console.error(error);
  }
  return weather;
};

export default useWeatherAPI;

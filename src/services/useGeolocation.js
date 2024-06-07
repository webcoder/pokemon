import { useEffect, useState } from "react";

const useGeolocation = function () {
  const [location, setLocation] = useState({});
  const updateState = ({ coords, timestamp }) => {
    setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    console.log(timestamp);
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(updateState, function (error) {
        console.log(error);
      });
    } else {
      alert("Este navegador no soporta Geolocalización");
    }
  }, []);

  return location;
};

export default useGeolocation;

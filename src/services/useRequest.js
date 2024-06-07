import { useState, useEffect } from "react";

const useRequest = function (url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => setData(data.toString()))
      .catch((error) => setError(error.toString()));
  }, [url]);

  return [data, error];
};

export default useRequest;

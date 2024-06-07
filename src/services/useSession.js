import { useEffect, useState } from "react";

const KEY = "___pokemon___";

const useCreateSession = function (data) {
  useEffect(() => {
    const save = Object.hasOwn(data, "username");
    if (save) {
      const encode = btoa(JSON.stringify(data));
      localStorage.setItem(KEY, encode);
    }
  }, [data]);
};

const useExistSession = function () {
  const decode = localStorage.getItem(KEY);
  if (decode == null) {
    return {};
  }
  const data = JSON.parse(atob(decode));
  const save = Object.hasOwn(data, "username");
  if (save) {
    return data;
  }
  return {};
};

export { useCreateSession, useExistSession };

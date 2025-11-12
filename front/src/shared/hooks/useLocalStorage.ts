import { useEffect, useState } from "react";

const useLocalStorage = (key: string, fallback: string) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) as string) ?? fallback
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

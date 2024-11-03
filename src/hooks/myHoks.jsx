import { useState } from "react";

export function useMyError() {
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  return { error, setError };
}

export function useMyWeather() {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  return { weather, setWeather };
}

export function useMyCity() {
  const [city, setCity] = useState("");

  return { city, setCity };
}

export function useMyLoading() {
  const [loading, setLoading] = useState(false);

  return { loading, setLoading };
}

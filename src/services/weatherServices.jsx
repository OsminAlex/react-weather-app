// Cosas de la API

import { useMyError } from "../hooks/myHoks";
import { useMyLoading } from "../hooks/myHoks";
import { useMyCity } from "../hooks/myHoks";
import { useMyWeather } from "../hooks/myHoks";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

function useMyStates() {
  const { error, setError } = useMyError();
  const { loading, setLoading } = useMyLoading();
  const { city, setCity } = useMyCity();
  const { weather, setWeather } = useMyWeather();

  return {
    error,
    setError,
    loading,
    setLoading,
    city,
    setCity,
    weather,
    setWeather,
  };
}

const onSubmit = async (e) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setError, setLoading, city, setWeather } = useMyStates();

  e.preventDefault();
  setError({ error: false, message: "" });
  setLoading(true);

  try {
    if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

    const res = await fetch(API_WEATHER + city);
    const data = await res.json();

    if (data.error) {
      throw { message: data.error.message };
    }

    console.log(data);

    setWeather({
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      condition: data.current.condition.code,
      conditionText: data.current.condition.text,
      icon: data.current.condition.icon,
    });
  } catch (error) {
    console.log(error);
    setError({ error: true, message: error.message });
  } finally {
    setLoading(false);
  }
};

export { onSubmit };

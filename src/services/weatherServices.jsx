import {
  useMyError,
  useMyLoading,
  useMyCity,
  useMyWeather,
} from "../hooks/myHoks";

const api_key = import.meta.env.VITE_API_KEY;
const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${api_key}&lang=es&q=`;

export function useOnSubmit() {
  const { setError } = useMyError();
  const { setLoading } = useMyLoading();
  const { city } = useMyCity();
  const { setWeather } = useMyWeather();

  const onSubmit = async (e) => {
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

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit };
}

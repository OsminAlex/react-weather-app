import Header from "./components/header.jsx";
import Text_Field from "./components/textField.jsx";
import Loading_Button from "./components/loadingButton.jsx";
import WeatherCard from "./components/weatherCard.jsx";
//import { useOnSubmit } from "./services/weatherServices.jsx";

import { Container, Box } from "@mui/material";

const api_key = import.meta.env.VITE_API_KEY;
const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${api_key}&lang=es&q=`;

import {
  useMyError,
  useMyLoading,
  useMyCity,
  useMyWeather,
} from "./hooks/myHoks";

export default function App() {
  const { setError } = useMyError();
  const { setLoading } = useMyLoading();
  const { city } = useMyCity();
  const { setWeather } = useMyWeather();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo es obligatorio" };

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

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Header />
      <Box
        sx={{ display: "grid", gap: 2 }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Text_Field />
        <Loading_Button />
      </Box>
      <WeatherCard />
    </Container>
  );
}

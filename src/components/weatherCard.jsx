//muestra la informacion del clima obtenida de la api
import { Box, Typography } from "react";

import { useMyWeather } from "../hooks/myHoks";

export default function WeatherCard() {
  const { weather } = useMyWeather();

  return (
    weather.city && (
      <Box
        sx={{
          mt: 2,
          display: "grid",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h2">
          {weather.city}, {weather.country}
        </Typography>
        <Box
          component="img"
          alt={weather.conditionText}
          src={weather.icon}
          sx={{ margin: "0 auto" }}
        />
        <Typography variant="h5" component="h3">
          {weather.temperature} °C
        </Typography>
        <Typography variant="h6" component="h4">
          {weather.conditionText}
        </Typography>
      </Box>
    )
  );
}

export { WeatherCard };

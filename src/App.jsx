import Header from "./components/header.jsx";
import Text_Field from "./components/textField.jsx";
import Loading_Button from "./components/loadingButton.jsx";
import WeatherCard from "./components/weatherCard.jsx";
import { onSubmit } from "./services/weatherServices.jsx";

import { Container, Box } from "@mui/material";

export default function App() {
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
        <WeatherCard />
      </Box>
    </Container>
  );
}

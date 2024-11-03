//encabezado de la app
import { Container, Typography } from "@mui/material";

const app_name = import.meta.env.VITE_APP_NAME;

export default function header() {
  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        {app_name}
      </Typography>
    </Container>
  );
}

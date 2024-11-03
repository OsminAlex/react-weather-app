//encabezado de la app
import { Typography } from "@mui/material";

const app_name = import.meta.env.VITE_APP_NAME;

export default function Header() {
  return (
    <Typography variant="h3" component="h1" align="center" gutterBottom>
      {app_name}
    </Typography>
  );
}

// campo a llenar para hacer el llamado a la API

import { TextField } from "@mui/material";

import { useMyCity } from "../hooks/myHoks";
import { useMyError } from "../hooks/myHoks";

export default function Text_Field() {
  const { city, setCity } = useMyCity();
  const { error } = useMyError();

  return (
    <TextField
      id="city"
      label="Ciudad"
      variant="outlined"
      size="small"
      required
      value={city}
      onChange={(e) => setCity(e.target.value)}
      error={error.error}
      helperText={error.message}
    />
  );
}

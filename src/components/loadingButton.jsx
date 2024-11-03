// boton
import { LoadingButton } from "@mui/lab";
import { useMyLoading } from "../hooks/myHoks";

export default function Loading_Button() {
  const { loading } = useMyLoading();

  return (
    <LoadingButton
      type="submit"
      variant="contained"
      loading={loading}
      loadingIndicator="Cargando..."
    >
      Buscar
    </LoadingButton>
  );
}

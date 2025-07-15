import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ERROR_CLOSE } from "../../Redux/Error/ActionType";

export default function ErrorSnackBar() {
  const [open, setOpen] = useState(true);
  const dispatch=useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
    dispatch({type:ERROR_CLOSE}) 
  };


  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Something went wrong!
      </Alert>
    </Snackbar>
  );
}

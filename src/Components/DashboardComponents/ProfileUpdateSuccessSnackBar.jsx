import { Alert, Snackbar } from "@mui/material";

export default function ProfileUpdateSuccessSnackBar({
  open,
  setOpenProfileUpdateSnackBar
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenProfileUpdateSnackBar(false);
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
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Profile Image Updated !
      </Alert>
    </Snackbar>
  );
}

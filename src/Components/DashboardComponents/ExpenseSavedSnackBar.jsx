import { Alert, Snackbar } from "@mui/material";

export default function ExpenseSavedSnackbars({ open, setOpenSuccessSnackBar }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSuccessSnackBar(false);
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
        Created!
      </Alert>
    </Snackbar>
  );
}

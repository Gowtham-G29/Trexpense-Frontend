import React from "react";
import {
  Drawer,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpenseUpdateForm from "./ExpenseUpdateForm";

export default function ExpenseUpdateFormDrawer({ setOpen ,setOpenSuccessSnackBar }) {
  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          maxHeight: "90vh",
          bottom: 20,
          position: "fixed",
          left: isMobile ? 0 : "10%",
          right: isMobile ? 0 : "10%",
          overflowY: "hidden",
          background: "transparent",
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <Box
        role="presentation"
        className="p-4 "
        sx={{
          width: "100%",
          maxWidth: isMobile ? "100%" : 600,
          margin: "0 auto",
        }}
      >
        <Box className="flex justify-end  items-center mb-4">
          <Button onClick={toggleDrawer(false)} variant="contained" color="error" sx={{":hover": { backgroundColor: "orange" }}}>
            <CloseIcon/>
          </Button>
        </Box>

        <ExpenseUpdateForm setOpen={setOpen} setOpenSuccessSnackBar={setOpenSuccessSnackBar}/>

      
      </Box>
    </Drawer>
  );
}

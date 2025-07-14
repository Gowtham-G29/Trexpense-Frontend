import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Card, CardMedia } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ExpenseCardDialog({ setOpenDialog, data }) {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <p className="flex justify-center items-center text-2xl font-serif font-bold text-slate-900">
            {data.purpose}
          </p>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color:"red",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-4">
              <p className="w-40 text-slate-600 font-bold">Amount Spend</p>
              <p className="text-black font-semibold">: ₹ {data.amount}</p>
            </div>

            <div className="flex gap-4">
              <p className="w-40 text-slate-600 font-bold">Purpose</p>
              <p className="text-black font-semibold">: {data.purpose}</p>
            </div>

            <div className="flex gap-4">
              <p className="w-40 text-slate-600 font-bold">Note</p>
              <p className="text-black font-semibold ">: {data.note}</p>
            </div>

            <div className="flex gap-4">
              <p className="w-40 text-slate-600 font-bold">Location</p>
              <p className="text-black font-semibold pl-24 lg:pl-16 ">: {data.address}</p>
            </div>

            <div className="flex gap-4">
              <p className="w-40 text-slate-600 font-bold">Date & Time</p>
              <p className="text-black font-semibold">
                : {new Date(data.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex gap-4 items-start col-span-full">
              <p className="w-40 text-slate-600 font-bold">Media</p>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: "194px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  image={`data:image/jpeg;base64,${data.image}`}
                  alt={data.purpose}
                />
              </Card>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </>
  );
}

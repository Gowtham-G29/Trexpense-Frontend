import { Button, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AddButton({ setOpen }) {
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{
        borderRadius: "12px", 
        p: 2,
        boxShadow: "0px 20px 25px -5px rgba(249,115,22,0.5)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "orange.main",
        },
      }}
      onClick={() => setOpen(true)}
    >
      <Tooltip title="Add Expenses" placement="top">
          <AddCircleOutlineIcon className="text-slate-700" s />
      </Tooltip>
    </Button>
  );
}

export default AddButton;

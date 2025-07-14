import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";

import IconButton from "@mui/material/IconButton";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCustomerExpense } from "../../Redux/Customer/Action";
import ExpenseCardDialog from "./ExpenseCardDialog";
import Loader from "../Loader";

export default function ExpenseCard({ expense ,setOpenDeleteSnackBar}) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteCustomerExpense(expense.id));
    setOpenDeleteSnackBar(true);
    handleMenuClose();
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  return (
    <>
      {openDialog && (
        <ExpenseCardDialog setOpenDialog={setOpenDialog} data={expense} />
      )}
      <Card
        key={expense.id}
        sx={{
          maxWidth: 345,
          marginBottom: 2,
          boxShadow: "0 4px 8px rgba(255, 165, 0, 0.4)",
          borderRadius: 3,
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardHeader
          action={
            <>
              <IconButton onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: "#f5f5f5",
                    color: "black",
                    borderRadius: "8px",
                    p: 0,
                    minWidth: "100px",
                    ":hover": {
                      backgroundColor: "#CD484C",
                      color: "white",
                    },
                  },
                }}
              >
                <MenuItem
                  onClick={() => handleDelete(expense.id)}
                  sx={{
                    fontSize: "12px",
                    padding: "4px 8px",
                    minHeight: "30px",
                    paddingLeft: "30px",
                  }}
                >
                  Delete
                </MenuItem>
              </Menu>
            </>
          }
          title={expense.purpose}
          subheader={new Date(expense.createdAt).toLocaleString()}
          sx={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontWeight: "30px",
          }}
        />

        <Divider />

        <CardContent
          sx={{
            width: "250px",
            height: "130px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
          }}
        >
          <p className=" flex flex-col justify-between items-center gap-4  pt-6 font-bold">
            <p className="flex justify-around items-center text-slate-600 gap-2 ">
              <p className="text-slate-600 ">Amount:</p> ₹{expense.amount}
            </p>
            <span
              className="hover:underline text-orange-400 font-serif text-sm"
              onClick={handleDialogOpen}
            >
              View more
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
}

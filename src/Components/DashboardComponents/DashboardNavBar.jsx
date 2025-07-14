import { Avatar, Box, Button, Switch, Tooltip } from "@mui/material";
import Logo from "../../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Action";
import AddButton from "./AddButton";

function DashboardNavBar({ setClickedComponent, setOpen }) {
  const dispatch = useDispatch();
  const { auth, customer } = useSelector((store) => store);

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <Box className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center bg-slate-100 px-4 md:px-8 lg:px-20 py-3 shadow-xl w-full ">
      <div>
        <img className="w-full h-15" src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:flex items-center gap-4">
        <AddButton
          setClickedComponent={setClickedComponent}
          setOpen={setOpen}
        />
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="font-bold text-slate-700 font-serif">Logout</p>{" "}
        <Switch onClick={handleLogout} defaultChecked color="warning" />
        <Tooltip title={auth.user} placement="bottom">
          {customer?.customerData?.profilePicture ? (
            <Avatar
              src={`data:image/jpeg;base64,${customer?.customerData?.profilePicture}`}
              alt="Profile"
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          ) : <Avatar/>}
        </Tooltip>
      </div>
    </Box>
  );
}

export default DashboardNavBar;

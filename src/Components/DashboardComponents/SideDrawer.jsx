import { Box, Tooltip, Divider } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddButton from "./AddButton";

function SideBar() {
 
  return (
    <>
      <Box className="hidden md:flex fixed left-0  w-20 bg-slate-100 shadow-2xl  z-50 flex-col items-center top-18 bottom-0 justify-between py-4 ">


        <div className="flex flex-col items-center mt-6 justify-around h-full gap-6">
          <Tooltip title="Map" placement="right">
            <div className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50">
              <MapIcon className="hover:text-orange-500 text-gray-700" />
            </div>
          </Tooltip>

          <Tooltip title="Expenses" placement="right">
            <div className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50">
              <CurrencyRupeeIcon className="hover:text-orange-500 text-gray-700" />
            </div>
          </Tooltip>

          <Tooltip title="Analytics" placement="right">
            <div className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50">
              <QueryStatsIcon className="hover:text-orange-500 text-gray-700" />
            </div>
          </Tooltip>

          <Tooltip title="Account" placement="right">
            <div
              className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50 cursor-pointer"
            >
              <AccountCircleIcon className="hover:text-orange-500 text-gray-700" />
            </div>
          </Tooltip>
        </div>
      </Box>

      <Box className="fixed md:hidden bottom-0 left-0 w-full bg-slate-100 shadow-inner z-50 flex justify-around items-center py-3 rounded-t-xl">
        <Tooltip title="Map" placement="top">
          <div className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50">
            <MapIcon className="hover:text-orange-500 text-gray-700" />
          </div>
        </Tooltip>

        <Tooltip title="Expenses" placement="top">
          <div className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50">
            <CurrencyRupeeIcon className="hover:text-orange-500 text-gray-700" />
          </div>
        </Tooltip>

        <AddButton/>

        <Tooltip title="Analytics" placement="top">
          <div className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50">
            <QueryStatsIcon className="hover:text-orange-500 text-gray-700" />
          </div>
        </Tooltip>

        <Tooltip title="Account" placement="top">
          <div
            className="bg-slate-200 p-2 rounded-lg shadow-lg shadow-orange-500/50 cursor-pointer"
          >
            <AccountCircleIcon className="hover:text-orange-500 text-gray-700" />
          </div>
        </Tooltip>
      </Box>
    </>
  );
}

export default SideBar;

import AddTaskIcon from "@mui/icons-material/AddTask";
import { Button, Tooltip } from "@mui/material";

function AddButton() {
  return (
    <Tooltip title="Add Expenses" placement="top">
      <p className="bg-orange-400 rounded-xl p-3 shadow-3xl shadow-orange-500/50 cursor-pointer items-center justify-center hover:bg-orange-500">
        <AddTaskIcon className="text-slate-700" />
      </p>
    </Tooltip>
  );
}

export default AddButton;

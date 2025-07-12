import DashboardNavBar from "../Components/DashboardComponents/DashboardNavBar";
import SideDrawer from "../Components/DashboardComponents/SideDrawer";

function DashBoard() {
  return (
    <div>
      <div className="relative">
        <DashboardNavBar />
      </div>
      <SideDrawer />
    </div>
  );
}

export default DashBoard;

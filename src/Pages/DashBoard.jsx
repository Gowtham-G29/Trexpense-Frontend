import { Container } from "@mui/material";
import DashboardNavBar from "../Components/DashboardComponents/DashboardNavBar";
import SideDrawer from "../Components/DashboardComponents/SideDrawer";
import MapComponent from "../Components/DashboardComponents/MapComponent";
import ExpenseCard from "../Components/DashboardComponents/ExpensesCard";
import AnalyticsBarChart from "../Components/DashboardComponents/AnalyticsBarChart";
import { useState } from "react";
import ProfilePage from "../Components/DashboardComponents/ProfilePage";
import ExpenseUpdateForm from "../Components/DashboardComponents/ExpenseUpdateForm";
import ExpenseUpdateFormDrawer from "../Components/DashboardComponents/ExpenseFormDrawer";
import { useSelector } from "react-redux";

function DashBoard() {
  const [clickedComponent, setClickedComponent] = useState("map");
  const [open, setOpen] = useState(false);

  const { customer } = useSelector((store) => store);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <DashboardNavBar
        setClickedComponent={setClickedComponent}
        setOpen={setOpen}
      />

      <div className="flex flex-1 pt-20 overflow-hidden">
        <div>
          <SideDrawer
            setClickedComponent={setClickedComponent}
            setOpen={setOpen}
          />
        </div>

        {clickedComponent === "map" && (
          <div className="relative flex-1 h-screen lg:ml-20 scrollbar-hide overflow-y-hidden">
            <div className="fixed top-20 left-0 lg:left-20 right-0 bottom-0 z-0">
              <MapComponent />
            </div>
          </div>
        )}

        {clickedComponent === "expenses" && (
          <div className="relative flex-1 pt-20 pb-38 h-screen overflow-y-auto lg:ml-20 md:ml-1 md:pb-20">
            <div className="flex flex-wrap justify-center items-start gap-4 p-4">
              {typeof customer?.expenses === "string" ||
              customer?.expenses?.length === 0 ? (
                <p className="text-gray-500 font-serif text-2xl text-center pt-40 w-full">
                  No Records found!
                </p>
              ) : (
                (customer?.expenses || []).map((expense) => (
                  <ExpenseCard expense={expense} key={expense.id} />
                ))
              )}
            </div>
          </div>
        )}

        {clickedComponent === "analytics" && (
          <div className="relative flex-1 pt-10 pb-38 h-screen overflow-y-auto lg:ml-20 md:ml-1 md:pb-20">
            <AnalyticsBarChart />
          </div>
        )}
        {clickedComponent === "account" && (
          <div className="relative flex-1 pt-20 pb-38 h-screen overflow-y-auto lg:ml-20 md:ml-1 md:pb-20">
            <ProfilePage />
          </div>
        )}

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <ExpenseUpdateFormDrawer setOpen={setOpen} />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;

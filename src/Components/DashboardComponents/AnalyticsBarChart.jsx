import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnalyticsYearSelect from "./AnalyticsYearSelect";

const xLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function AnalyticsBarChart() {
  const { customer } = useSelector((store) => store);
  const [requiredYear, setRequiredYear] = useState(new Date().getFullYear());
  const [totalByYear, setTotalByYear] = useState();

  const [monthlyTotals, setMonthlyTotals] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  const getMonthlyTotalByYear = (year) => {
    const totals = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };

    if (Array.isArray(customer?.expenses)) {
      customer.expenses.forEach((expense) => {
        const expenseDate = new Date(expense.createdAt);
        const expenseYear = expenseDate.getFullYear();
        const monthIndex = expenseDate.getMonth();
        const amount = Number(expense.amount);

        if (expenseYear === year) {
          const monthNames = Object.keys(totals);
          const monthName = monthNames[monthIndex];
          if (monthName) {
            totals[monthName] += amount;
          }
        }
      });
    }
    setMonthlyTotals(totals);
    handleCalculateYearlyTotal(totals);
  };

  const handleCalculateYearlyTotal = (totals) => {
    const total = Object.values(totals).reduce(
      (acc, amount) => acc + amount,
      0
    );
    setTotalByYear(total);
  };

  useEffect(() => {
    if (customer) {
      getMonthlyTotalByYear(requiredYear);
    }
  }, [customer, requiredYear]);

  return (
    <>
      <div className="flex justify-around items-center pb-8">
        <p className="text-center text-sm font-bold text-slate-600 border p-3 border-amber-500">
          Total Expense ₹ {totalByYear}
        </p>
        <AnalyticsYearSelect setRequiredYear={setRequiredYear} />
      </div>
      <BarChart
        height={300}
        series={[
          {
            data: Object.values(monthlyTotals),
            label: "Total expenses by month",
            id: "pvId",
          },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    </>
  );
}

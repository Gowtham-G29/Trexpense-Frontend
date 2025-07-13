import { BarChart } from "@mui/x-charts/BarChart";

const pData = [2400, 1398, 12000, 3908, 4800, 3800, 4300];

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
  return (
    <>
      <BarChart
        height={300}
        series={[
          { data: pData, label: "Total expenses in month wise", id: "pvId" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
      <div className="flex justify-center pt-10">
        <p className="text-center text-xl font-serif font-bold">Total Expenses in Year 1000</p>
      </div>
    </>
  );
}

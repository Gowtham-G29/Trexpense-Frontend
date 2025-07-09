import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <CircularProgress
        sx={{ width: "100px", height: "100px", color: "#F97316" }} // Tailwind orange-500
      />
    </div>
  );
}

export default Loader;

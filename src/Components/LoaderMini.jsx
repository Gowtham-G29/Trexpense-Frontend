import { CircularProgress } from "@mui/material"

function LoaderMini() {
    return (
        <div>
            <CircularProgress
                    sx={{ width: "100px", height: "100px", color: "#F97316" }} // Tailwind orange-500
                  />
        </div>
    )
}

export default LoaderMini

import { Container, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { confirmAccountActivation } from "../Redux/Auth/Action";
import Loader from "./Loader";
import HeroImage from "../assets/HeroImage.jpg";



function ActivationConfirmationPage() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleActivate = () => {
    dispatch(confirmAccountActivation(token));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-100 p-4 z-10">
      <img
        className="absolute inset-0 w-full h-full object-cover object-center z-0 bg-black/30 "
        src={HeroImage}
        alt="Background"
      />
      {auth.loading && <Loader />}
      {!auth.activate ? (
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            boxShadow: 3,
            p: 4,
            textAlign: "center",
            position:"relative"
          }}
        >
          <div className="flex flex-col items-center space-y-4">
            <LockPersonIcon color="warning" sx={{ fontSize: 60 }} />

            <Typography variant="h5" sx={{ color: "#ea580c", fontWeight: 600 }}>
              Activate profile
            </Typography>

            <Typography variant="body1" color="text.secondary">
              You can "Click here" activate and start using your account.
            </Typography>

            <Button
              variant="contained"
              onClick={handleActivate}
              startIcon={<LockOpenIcon />}
              sx={{
                mt: 2,
                bgcolor: "#f97316", // Tailwind orange-500
                "&:hover": {
                  bgcolor: "#ea580c", // Tailwind orange-600
                },
              }}
            >
              Activate
            </Button>
          </div>
        </Container>
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            boxShadow: 3,
            p: 4,
            textAlign: "center",
           position:"relative"

          }}
        >
          <div className="flex flex-col items-center space-y-4">
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60 }} />
            <Typography variant="h5" color="success.main" fontWeight={600}>
              Your account has been successfully activated!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              You can now log in and start using your account.
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={handleGoToLogin}
              sx={{ mt: 2 }}
            >
              Go to Login
            </Button>
          </div>
        </Container>
      )}
    </div>
  );
}

export default ActivationConfirmationPage;

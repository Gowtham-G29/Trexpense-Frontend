import { Container, Typography, Button } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/HeroImage.jpg";
import NavBarAuthPage from "./NavBarAuthPage";


function MailSentSuccessPage() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-grey-100 p-4 z-10">
        <NavBarAuthPage/>
      <img
        className="absolute inset-0 w-full h-full object-cover object-center z-0 bg-black/30 "
        src={HeroImage}
        alt="Background"
      />
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
          <MarkEmailReadOutlinedIcon sx={{ fontSize: 60, color: "#3b82f6" }} />
          <Typography variant="h5" sx={{ color: "#2563eb", fontWeight: 600 }}>
            Activation Email Sent!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Please check your inbox and click the link to activate your account.
          </Typography>
          <Button
            variant="contained"
            onClick={handleGoToLogin}
            sx={{
              mt: 3,
              bgcolor: "#3b82f6", 
              "&:hover": { bgcolor: "#2563eb" }, 
            }}
          >
            Go to Home and Login!
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default MailSentSuccessPage;

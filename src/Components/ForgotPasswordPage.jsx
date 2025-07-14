import { Container, Typography, TextField, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import HeroImage from "../assets/HeroImage.jpg";
import NavBarAuthPage from "./NavBarAuthPage";
import { sendResetPasswordMail } from "../Redux/Auth/Action";

function ForgotPasswordPage() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendResetPasswordMail(email));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-100 p-4 z-10">
      <NavBarAuthPage />

      <img
        className="absolute inset-0 w-full h-full object-cover object-center z-0 bg-black/30"
        src={HeroImage}
        alt="Background"
      />

      {auth.loading && <Loader />}

      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          boxShadow: 3,
          p: 4,
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          <MailOutlineIcon color="primary" sx={{ fontSize: 60 }} />

          <Typography variant="h5" sx={{ color: "#2563eb", fontWeight: 600 }}>
            Forgot Your Password?
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Enter your email address and we’ll send you a link to reset your password.
          </Typography>

          <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 mt-4 gap-5">
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          {auth.passwordResetMailSent?(<p className="text-green-600 text-xl font-serif font-bold">Reset link sent to your provided email address </p>):(<Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#3b82f6", 
                "&:hover": { bgcolor: "#2563eb" },
              }}
            >
              Send Reset Link
            </Button>)}
            
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ForgotPasswordPage;

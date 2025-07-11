import { Container, Typography, TextField, Button } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
// import { resetPassword } from "../Redux/Auth/Action"; // you need to implement this
import Loader from "./Loader";
import HeroImage from "../assets/HeroImage.jpg";
import NavBarAuthPage from "./NavBarAuthPage";
import { passwordReset } from "../Redux/Auth/Action";

function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email=searchParams.get("email")

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    dispatch(passwordReset(email,token, password));
    navigate("/login");
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
          <LockResetIcon sx={{ fontSize: 60, color: "#3b82f6" }} />

          <Typography variant="h5" sx={{ color: "#2563eb", fontWeight: 600 }}>
            Reset Your Password
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Enter a new password below to reset your account.
          </Typography>

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col space-y-4 mt-4 gap-5"
          >
            {auth.passwordResetSucccessful ? (
              <p className="text-green-600 font-serif font-bold text-xl">
                Your password reset successfully ! Now you can Login using new Password
              </p>
            ) : (
              <>
                <TextField
                  label="New Password"
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  label="Confirm New Password"
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#3b82f6", // Tailwind blue-500
                    "&:hover": { bgcolor: "#2563eb" }, // Tailwind blue-600
                  }}
                >
                  Reset Password
                </Button>
              </>
            )}
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ResetPasswordPage;

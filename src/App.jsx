import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandPage from "./Pages/LandPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashBoard from "./Pages/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
import ActivationConfirmationPage from "./Components/ActivationConfirmationPage";
import MailSentSuccessPage from "./Components/MailSendSuccessPage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import ResetPasswordPage from "./Components/ResetPasswordPage";
import { getCustomerExpenses } from "./Redux/Customer/Action";

function App() {
  const { auth ,customer} = useSelector((store) => store);

  const dispatch = useDispatch();

  console.log(auth);
  console.log(customer);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getCustomerExpenses());
  }, [auth.jwt]);

  return (
    <BrowserRouter>
      <Routes>
        {auth.data?.isActive ? (
          <>
            <Route path="/" element={<DashBoard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/activatePage"
              element={<ActivationConfirmationPage />}
            />
            <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
            <Route path="/resetPassword" element={<ResetPasswordPage />} />
            {auth.activationMailSent && (
              <Route path="/regSuccessPage" element={<MailSentSuccessPage />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

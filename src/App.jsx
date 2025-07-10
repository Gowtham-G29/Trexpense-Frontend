import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandPage from "./Pages/LandPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashBoard from "./Pages/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);

  const dispatch = useDispatch();

  // dispatch(logout())

  useEffect(() => {
    dispatch(getUser());
  }, [auth.jwt]);

  return (
    <BrowserRouter>
      <Routes>
        {!auth.user ? (
          <>
            <Route path="/" element={<LandPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Optionally redirect any unknown route to landing */}

            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<DashBoard />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

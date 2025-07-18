import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import HeroImage from "../assets/HeroImage.jpg";
import NavBarAuthPage from "../Components/NavBarAuthPage";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { login} from "../Redux/Auth/Action";
import ErrorSnackBar from "../Components/DashboardComponents/ErrorSnackBar";

function LoginPage() {

  const dispatch=useDispatch();


  const {auth}=useSelector((store)=>store)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    
    dispatch(login({
      email:email,
      password:password
    }))

  };



  return (
    <>
      <div className="relative min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
        <NavBarAuthPage />
        {/* {error.isError&&<ErrorSnackBar/>} */}
        {auth.loading&&<Loader/>}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0 bg-black/30 "
          src={HeroImage}
          alt="Background"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center w-full p-4 z-10">
          <section className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
            <div className="text-center">
              <p className="text-4xl font-bold font-serif text-orange-500 drop-shadow-lg">
                Welcome Back !
              </p>
            </div>
          </section>

          <section className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md border border-white shadow-2xl shadow-amber-500 rounded-2xl p-8 bg-white bg-opacity-95 backdrop-blur-md">
              <p className="font-serif font-extrabold text-2xl text-center mb-6">
                Login here!
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Email ID"
                    id="email"
                    name="email"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    variant="outlined"
                  />
                </Box>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-400 text-white w-full rounded-xl py-3 font-serif font-bold transition duration-300"
                >
                  Login
                </button>
              </form>

              <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-3 text-sm text-gray-600">
                <Link to="/forgotPassword" className="hover:text-orange-500">
                  Forgot Password?
                </Link>
                <Link to="/register" className="hover:text-orange-500">
                  Don't have an account?
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

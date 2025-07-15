import Box from "@mui/material/Box";
import Logo from "../assets/Logo.png";
import TextField from "@mui/material/TextField";
import { sentContactUsMail } from "../Services/Api";
import { useState } from "react";
import LoaderMini from "./LoaderMini";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [mailSentSuccess, setMailSentSuccess] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    setLoading(true);
    try {
      const response = await sentContactUsMail({ email, message });
      setLoading(false);
      if (response) {
        setMailSentSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      setLoading(false);
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="py-10 bg-slate-100 sm:pt-16 lg:pt-24 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-auto h-25" src={Logo} alt="logo" />

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Trexpense is your smart travel expense manager, helping you track
              where and how you spend all while exploring the world.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="https://www.instagram.com/gow.thxm/"
                  title="instagram"
                  className="flex items-center justify-center text-white transition-all duration-200  w-7 h-7 "
                >
                  <InstagramIcon
                    sx={{
                      color: "black",
                      fontSize: "35px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#E1306C", 
                        transform: "scale(1.2)",
                        cursor: "pointer",
                      },
                    }}
                  />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 w-7 h-7"
                >
                  <FacebookOutlinedIcon
                      sx={{
                      color: "black",
                      fontSize: "35px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#1877F2", 
                        transform: "scale(1.2)",
                        cursor: "pointer",
                      },
                    }}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/gowtham-g-b21b26282/"
                  title="linkedin"
                  className="flex items-center justify-center text-white transition-all duration-200  w-7 h-7 "
                >
                  <LinkedInIcon   sx={{
                      color: "black",
                      fontSize: "35px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#0077B5", 
                        transform: "scale(1.2)",
                        cursor: "pointer",
                      },
                    }} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Gowtham-G29"
                  title="github"
                  className="flex items-center justify-center text-white transition-all duration-200 w-7 h-7 "
                >
                  <GitHubIcon   sx={{
                      color: "black",
                      fontSize: "35px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "black", 
                        transform: "scale(1.2)",
                        cursor: "pointer",
                      },
                    }} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Contact us
            </p>

            <form onSubmit={handleMessage} className="space-y-6 mt-5">
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  required
                  label="Your Email"
                  id="email"
                  name="email"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  required
                  multiline
                  label="Message"
                  id="message"
                  name="message"
                  type="message"
                  variant="outlined"
                  maxRows={5}
                />
              </Box>
              {!loading ? (
                mailSentSuccess ? (
                  <p className="text-green-500 text-center font-bold">
                    Your query is sent to support team successfully! We will
                    contact you soon.
                  </p>
                ) : (
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-400 text-white w-full rounded-xl py-3 font-serif font-bold transition duration-300"
                  >
                    <div className="flex items-center justify-center gap-x-3">
                      <p className="text-lg">Send</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-send-icon lucide-send"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                    </div>
                  </button>
                )
              ) : (
                <div className="flex items-center justify-center">
                  <LoaderMini />
                </div>
              )}
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2025, All Rights Reserved by Trexpense
        </p>
      </div>
    </section>
  );
};
export default Footer;

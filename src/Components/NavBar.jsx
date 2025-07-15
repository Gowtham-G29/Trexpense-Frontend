import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <header className="lg:py-0 md:py-6 sm:py-4 bg-grey-100">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" className="flex cursor-pointer ">
                <img className="w-auto h-25" src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="flex lg:hidden cursor-pointer">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <svg
                    className="w-7 h-7 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a
                href="#"
                className="text-base font-extrabold text-gray-900  hover:text-orange-500  font-serif"
              >
                Features
              </a>
              <a
                href="#"
                className="text-base font-extrabold text-gray-900  hover:text-orange-500  font-serif"
              >
                Contact us
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <Link to="/login">
                <a
                  href="#"
                  className="text-base font-extrabold text-gray-900  hover:text-orange-500  font-serif"
                >
                  {" "}
                  Login
                </a>
              </Link>
              <Link to="/register">
                <a
                  href=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 font-serif"
                >
                  Create new account
                </a>
              </Link>
            </div>
          </div>

          {expanded && (
            <nav className="lg:hidden">
              <div className="px-1 py-8">
                <div className="flex flex-col justify-center items-center gap-3">
                  <a
                    href="/"
                    className="p-3 text-base font-extrabold text-gray-900 hover:text-orange-500 rounded-xl font-serif"
                  >
                    Features
                  </a>
                  <a
                    href="/"
                    className="p-3 text-base font-extrabold text-gray-900  hover:text-orange-500  rounded-xl font-serif"
                  >
                    contact us
                  </a>
                  <Link to="/login">
                    <a
                      href="#"
                      className="p-3 text-base font-extrabold text-gray-900  hover:text-orange-500  rounded-xl font-serif"
                    >
                      Login
                    </a>
                  </Link>

                  <Link to="/register">
                    <a
                      href=""
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 font-serif"
                    >
                      Create new account
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;

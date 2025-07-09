import Logo from "../assets/Logo.png";

const NavBarAuthPage = () => {

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <header className="lg:py-1 md:py-6 sm:py-4 w-full absolute top-0 left-0 z-10 bg-transparent text-white px-4 py-3 flex justify-between items-center">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="/" className="flex cursor-pointer ">
                <img className="w-auto h-30" src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 font-serif"
              >
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBarAuthPage;

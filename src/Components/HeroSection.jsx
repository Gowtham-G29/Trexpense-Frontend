import HeroImage from "../assets/HeroImage.jpg";

function HeroSection() {
  return (
    <section>
      <div className="relative py-48 bg-orange-50 sm:py-32 lg:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover object-right w-full h-full lg:object-center"
            src={HeroImage}
            alt="bg"
          />
        </div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
            <h1 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl font-serif">
              “Explore the world, not your wallet. Trexpense keeps your travel
              spending on track.”{" "}
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-bold leading-7 text-black font-serif lg:p-12 sm:p-14 p-8">
              <button className="bg-orange-400 rounded-2xl">
                <div className="flex items-center justify-center">
                  <p className="p-3">Explore </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-big-right-dash-icon lucide-arrow-big-right-dash"
                  >
                    <path d="M5 9v6" />
                    <path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
                  </svg>
                </div>
              </button>
            </p>

            {/* <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
              <div>
                <p className="text-4xl font-bold text-white">38,942</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Order Delivered
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-white">14,344</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Registered Customers
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

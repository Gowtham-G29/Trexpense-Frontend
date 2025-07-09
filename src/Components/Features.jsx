const Features = () => {
  return (
    <section className="py-12 bg-slate-100 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-serif">
            Features
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-serif">
            Trexpense is your ultimate travel companion to manage expenses on the go. Whether you're backpacking across continents or planning a weekend getaway, Trexpense helps you record every spend, categorize your activities, and stay within your budget all in one place. 
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-3 xl:mt-24 lg:gap-3">
          {[
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#088906"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock10-icon lucide-clock-10"
                >
                  <path d="M12 6v6l-4-2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              ),
              title: "Track your travel expenses in real time",
              description:
                "Log every expense as it happens, from anywhere in the world.",
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c1c403"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-tag-icon lucide-tag"
                >
                  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
              ),
              title: "Categorize spending by type",
              description:
                "Sort expenses into categories like Food, Stay, Travel, Shopping, and more.",
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c44545"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pinned-icon lucide-map-pinned"
                >
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                </svg>
              ),
              title: "Drop location markers where you spend",
              description:
                "Pin each expense to its actual location on the map to visualize your spending trail.",
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7e75f5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chart-line-icon lucide-chart-line"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              ),
              title: "Visual summaries to see where your money goes",
              description:
                "Understand your habits with intuitive charts and location-linked stats.",
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d40893"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-lock-icon lucide-user-lock"
                >
                  <circle cx="10" cy="7" r="4" />
                  <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
                  <path d="M15 15.5V14a2 2 0 0 1 4 0v1.5" />
                  <rect width="8" height="5" x="13" y="16" rx=".899" />
                </svg>
              ),
              title: "Secure login and multi-device access",
              description:
                "Your data is safe and synced across all your devices.",
            },
            {
              svg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#08a1d4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              ),
              title: "Simple, clean interface for stress-free budgeting",
              description: "Focus on your adventures — not your receipts.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`transition-transform transform hover:-translate-y-1 hover:shadow-2xl rounded-3xl bg-gradient-to-l from-orange-100 via-orange-200 to-white border border-gray-200 p-8 lg:p-14 ${
                index >= 3 ? "md:border-t" : ""
              } ${index % 3 !== 0 ? "md:border-l" : ""}`}
            >
              <div className="flex justify-center">{item.svg}</div>

              <h3 className="mt-8 text-xl font-bold text-gray-900 font-serif">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-gray-600 font-serif">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;

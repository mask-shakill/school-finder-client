import React from "react";
import ImgHero from "../../asset/schoolfinder.png";
const HeroBanner = () => {
  return (
    <div>
      <div className="relative bg-blue-800 w-full h-[531px]">
        <div>
          <div className="absolute top-14 left-10">
            <h1 className="text-5xl text-yellow-300 font-bold">
              Discover your path to knowledge <br /> Find your Idle School
            </h1>
            <h1 className="text-2xl font-semibold mt-10 text-white">
              Search your Idle School name or location
            </h1>
          </div>
          <div className="absolute bottom-10 left-10 w-1/2">
            <p className="text-justify  text-white text-lg">
              Embark on a journey of intellectual exploration to discover your
              ideal educational path. Uncover your Idle School, where your
              passions and interests converge, shaping a unique roadmap to
              knowledge acquisition. By identifying this personalized avenue,
              you can cultivate a meaningful and fulfilling learning experience
              tailored to your individual aspirations.
            </p>
          </div>

          <form className="absolute top-10 left-10 w-1/2 mt-56">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search any Schools or locations..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="absolute bottom-0  right-0">
          <img src={ImgHero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

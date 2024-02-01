import React from "react";
import HeroBanner from "../components/Home/HeroBanner";
import Map from "../components/Home/Map";
import TopSchools from "../components/Home/TopSchools";
import Education from "../components/Home/Education";
import ExploreBoard from "../components/Home/ExploreBoard";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Map />
      <TopSchools />
      <ExploreBoard />
      <Education />
    </div>
  );
};

export default Home;

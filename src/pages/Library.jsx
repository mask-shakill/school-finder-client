import React from "react";
import HeroSection from "../components/OnlineLibrary/HeroSection";
import AllCategories from "../components/OnlineLibrary/AllCategories";
import IslamicBooks from "../components/OnlineLibrary/IslamicBooks";
import ChildrenBooks from "../components/OnlineLibrary/ChildrenBooks";

const Library = () => {
  return (
    <>
      <HeroSection />
      <AllCategories />
      <IslamicBooks />
      <ChildrenBooks />
    </>
  );
};

export default Library;

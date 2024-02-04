import React from "react";
import SmallBlogs from "../components/Blogs/SmallBlogs";
import Events from "../components/Blogs/Events";

const Blogs = () => {
  return (
    <div className="mb-28 ">
      <SmallBlogs />
      <Events />
    </div>
  );
};

export default Blogs;

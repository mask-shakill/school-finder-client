import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-lg">
      <div className="flex items-center gap-x-2 ps-7">
        <img
          className="w-10"
          src="https://cdn-icons-png.freepik.com/256/3976/3976625.png?uid=R95679985&ga=GA1.1.1242648836.1702358523&semt=ais"
          alt=""
        />
        <h1 className="font-semibold text-2xl text-orange-600">
          {" "}
          <span className="text-blue-600">School</span> Explorer
        </h1>
      </div>
      <ul className="flex items-center gap-x-7 font-semibold text-slate-700">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/library"}>Library</Link>
        </li>
        <li>
          <a target="_blank" href="http://www.educationboardresults.gov.bd/">
            Board Result
          </a>
        </li>
        <li>
          <Link to={"/news"}>E-learning</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blogs</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
      </ul>

      <div>
        <button className="bg-orange-600 px-8  py-2 rounded-2xl text-white font-semibold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

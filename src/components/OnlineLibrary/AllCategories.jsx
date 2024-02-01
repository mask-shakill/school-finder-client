import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const AllCategories = () => {
  return (
    <div className="mb-28 mx-16">
      <h1 className="text-2xl font-semibold mt-10">All Categories</h1>{" "}
      <hr className="bg-slate-300 h-[2px]" />
      <div className="grid grid-cols-4 mt-5 gap-4">
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/2232/2232688.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Text Books
            <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/7197/7197105.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Islamic Books
            <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/1702/1702289.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Children Books
            <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/2035/2035634.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Story Books <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/14180/14180461.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Poetry
            <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/2035/2035316.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Cookbooks
            <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/2351/2351815.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Programming Book <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
        <div className="flex items-center border shadow-md p-3 rounded-lg">
          <img
            className="w-[70px]"
            src="https://cdn-icons-png.freepik.com/256/6154/6154319.png?uid=R95679985&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <a href="" className="flex items-center ms-3 font-semibold">
            Sports Book
            <IoIosArrowForward className="text-xl ms-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;

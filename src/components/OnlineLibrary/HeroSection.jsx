import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="mx-10">
        <div className="flex ">
          <img
            className="mt-5"
            src="https://img.freepik.com/premium-vector/book-shelves-bookcase-library-bookstore-education_53500-172.jpg?size=626&ext=jpg&uid=R95679985&ga=GA1.1.945868740.1697346172&semt=sph"
            alt=""
          />
          <div>
            <h1 className="text-center text-3xl mt-14">Our Digital Library</h1>
            <p className="text-justify font-serif mt-5 ms-5">
              Our digital library offers a vast and diverse collection of
              knowledge at your fingertips, spanning various subjects and
              disciplines. Users can easily access a wealth of information,
              including academic resources, literature, and multimedia content,
              fostering a dynamic learning environment. With user-friendly
              interfaces and advanced search capabilities, our digital library
              aims to empower individuals in their quest for information and
              intellectual exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

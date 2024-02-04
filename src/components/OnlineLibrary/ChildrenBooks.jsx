import React, { useEffect, useState } from "react";

const ChildrenBooks = () => {
  const [childrenBooks, setChildrenBooks] = useState([]);
  useEffect(() => {
    fetch("ChildrenBooks.json")
      .then((res) => res.json())
      .then((data) => setChildrenBooks(data));
  }, []);
  return (
    <div className="mx-14 mb-28">
      <h1 className="text-3xl font-semibold ">Children Books</h1> <hr />
      <section className="grid grid-cols-6 bg-blue-100 mt-8 gap-6  p-4 rounded">
        {childrenBooks.map((book) => (
          <div
            key={book.id}
            className=" flex flex-col items-center text-center shadow-sm gap-y-1 rounded w-30 h-[260px] bg-white border relative"
          >
            <img className="w-24 h-28 mt-2" src={book.img} alt="" />
            <h1 className="font-semibold">{book.name}</h1>
            <p>{book.writer}</p>
            <button className="font-bold text-orange-500 absolute bottom-1">
              Download
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ChildrenBooks;

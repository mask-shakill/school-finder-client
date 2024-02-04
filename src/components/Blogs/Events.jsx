import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("Events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <section className="text-center mt-10">
        <h1 className="bg-slate-200 p-10 font-semibold text-3xl ">
          {" "}
          Latest Events
        </h1>
        <hr className="bg-orange-600 h-3" />
      </section>
      <section className="mx-14 mt-10">
        {events.map((e) => (
          <div key={e.id} className="grid grid-cols-2 border p-5 rounded mt-2">
            <div className="col-span-1 me-3 ">
              <a href="">
                <h1 className="text-4xl font-semibold font-serif mt-5">
                  {e.title}
                </h1>
              </a>
              <p className="text-lg mt-10">{e.description}</p>
              <p className="text-semibold mt-10">{e.date}</p>
            </div>
            <a href="">
              <img className="rounded" src={e.img} alt="" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;

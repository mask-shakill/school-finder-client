import React, { useEffect, useState } from "react";

const TopSchools = () => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("TopSchools.json")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);
  return (
    <div className=" mt-8">
      <div className="mx-16 py-10">
        <h1 className="text-4xl text-slate-800 font-semibold mb-4">
          Top Schools in Bangladesh
        </h1>
        <div className="w-3/4">
          <p>SchoolFinder ranks institutes based on public exam data.</p>
          <p>Exams considered are JSC and SSC.</p>
          <p>
            {" "}
            SchoolFinder ranking algorithm calculates total appearance, total
            pass, total fail, total A+, pass rate, and fail rate. Top schools
            mean institutes that are ranked top across Bangladesh considering
            all JSC, and SSC exams.
          </p>
        </div>
      </div>
      <div className="bg-slate-300 py-10 ">
        <div className="grid grid-cols-3 mx-16 gap-5">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white flex items-center  border rounded-xl p-3 gap-x-4 "
            >
              <img
                className="w-1/4"
                src="https://static.vecteezy.com/system/resources/previews/015/529/452/non_2x/100th-day-of-school-cartoon-colored-clipart-free-vector.jpg"
                alt=""
              />
              <a className="text-slate-600 font-semibold" href="#">
                {school.school}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSchools;

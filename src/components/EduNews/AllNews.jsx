import React, { useEffect, useState } from "react";

const AllNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("News.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {news.map((n) => (
          <div key={n.id} className="text-center border  p-4 shadow-lg">
            <a className="" target="_blank" href={n.link}>
              <img className="" src={n.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;

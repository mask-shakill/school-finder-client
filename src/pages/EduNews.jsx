import React from "react";
import AllNews from "../components/EduNews/AllNews";
import ReactPlayer from "react-player";
const EduNews = () => {
  return (
    <div className="mb-28 mx-16">
      <section className="flex mt-4 ">
        <div className="w-2/3 mt-10">
          <p className="text-3xl mb-3 font-semibold">
            Unveiling the Latest in Educational News and Insights our Website.
          </p>
          <p className="text-justify text-slate-600">
            "EduPulse delivers a dynamic blend of breaking educational news,
            insightful analyses, and thought-provoking features, providing a
            comprehensive snapshot of the ever-evolving landscape of learning.
            Stay informed about policy changes, emerging trends, and innovative
            practices shaping the education sector. Whether you're a student,
            educator, or education enthusiast, EduPulse is your go-to source for
            staying abreast of the latest developments and fostering a deeper
            understanding of the educational journey."
          </p>
          <div className="mt-20">
            <h1 className="font-semibold text-2xl bg-slate-800 p-3 text-white text-center mb-2">
              Most Visited Bangla Educational Newspaper 2024
            </h1>
            <AllNews />
            <div>
              <p className="text-2xl font-semibold mt-16 bg-blue-600 text-white w-[550px] text-center p-4">
                {" "}
                Live some educational video
              </p>{" "}
              <hr className="h-[10px] mt-1 bg-orange-700 w-[550px]" /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://www.youtube.com/watch?v=vuTY4FDAbpA&pp=ygUKZWR1Y2F0aW9uIA%3D%3D"
              />{" "}
              <br /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://youtu.be/sb54zo11hSU"
              />{" "}
              <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://www.youtube.com/watch?v=0_A9J3q3SrE&pp=ygUKZWR1Y2F0aW9uIA%3D%3D"
              />
            </div>
            <div>
              <p className="text-2xl font-semibold mt-16 bg-yellow-600 text-white w-[550px] text-center p-4">
                {" "}
                Educational videos for kids
              </p>{" "}
              <hr className="h-[10px] mt-1 bg-orange-700 w-[550px]" /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://youtu.be/XF_RhnCGuHM"
              />{" "}
              <br /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://youtu.be/0GAhHaK4y58"
              />{" "}
              <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://www.youtube.com/watch?v=0_A9J3q3SrE&pp=ygUKZWR1Y2F0aW9uIA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" ms-10 mt-10 ">
            <ReactPlayer
              height="300px"
              width="550px"
              url="https://youtu.be/q-Y-z6HmRgI"
            />
          </div>
          <img
            src="https://img.freepik.com/free-vector/feed-concept-illustration_114360-4429.jpg?t=st=1706866453~exp=1706867053~hmac=e33cecc730fc03a72ec967f06080b25745c174124ec331f6f3d2e7ed58a18630"
            alt=""
          />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://youtu.be/Bgmjs6AcFjU"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=eR_F3PIbFsE"
          />
          <p className="text-2xl font-semibold mt-16 bg-lime-600 text-white w-[550px] text-center p-4">
            {" "}
            Educational crafting videos for kids
          </p>{" "}
          <hr className="h-[10px] mt-1 bg-orange-700 w-[550px]" /> <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=HDFL15FxWEc&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=2hcLN7OXCF0&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=TJXqoONf4lc&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=lpHXVM6ELwk&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />
        </div>
      </section>
    </div>
  );
};

export default EduNews;

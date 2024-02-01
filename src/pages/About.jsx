import React from "react";
import Contact from "../components/Contact/Contact";

const About = () => {
  return (
    <div className="mt-10 mx-14 mb-28  ">
      <div className="">
        <div className="flex  justify-between">
          <img
            className="w-[500px] mt-3"
            src="https://img.freepik.com/premium-vector/development-mobile-search-application-cartoon_82574-3186.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />

          <div className="mt">
            <div className="text-center font-serif mt-20">
              <p className="font-semibold">Our Mission</p>
              <p className="font-semibold text-lg">
                Choosing the right school for your home is vital for your
                child's education.
              </p>
            </div>
            <p className="text-justify font-serif mt-3 ms-16">
              Our mission is to guide parents in choosing the right school for
              their homes, recognizing the vital role it plays in their child's
              education. We prioritize providing comprehensive information about
              educational institutions, emphasizing factors such as academic
              excellence, extracurricular activities, and a supportive learning
              environment. By facilitating informed decisions, we aim to empower
              parents to create a foundation for their child's educational
              success. Together, we believe in fostering an environment where
              every child can thrive and reach their full potential.
            </p>
          </div>
        </div>
      </div>

      <h1 className=" text-2xl font-semibold mt-20 flex flex-col items-center text-slate-700 ">
        Meet Our Team Members
        <div className=" bg-slate-600 w-[300px]  h-1"></div>
      </h1>
      <div className=" mt-12 grid grid-cols-3 gap-10">
        <div className=" col-span-1  border  p-10 bg-slate-900 text-white rounded-2xl flex flex-col items-center gap-y-3 shadow-xl">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/73318241_1160876307436318_1635304331186012160_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFnkN0Fd4mbEi5ErX_lKO5NsjkEkmvTTfCyOQSSa9NN8EokDeFjx1cYAEsSNpPV_Tb4K3DeAX2wKbZE5XVuxpaU&_nc_ohc=jHhYbT9NLXkAX-KtOMa&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDqBeNWdXS4tZN5rQ1KgeEzI0TXm4gSg1RZa1rB8JuziQ&oe=65E35E08"
            alt=""
          />
          <h1>Md Ashikul Akash</h1>
          <p>Co-Founder and CEO</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            itaque accusamus quo voluptatibus fuga soluta iste odit corporis
            repudiandae nihil.
          </p>
        </div>
        <div className=" col-span-1  border  p-10 bg-orange-900 text-white rounded-2xl flex flex-col items-center gap-y-3 shadow-xl">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/357409246_114096808399480_5230167461673955050_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEW-K8AvOEPrhybrr2cb0mvOutvo1mmZRw662-jWaZlHIETrDP6TDJdBlIO8Dwk6s6K3o0sn47dZDkvnBotqEZ4&_nc_ohc=Kp3ePuHW4LAAX8_fVYi&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDWjNIIPNGkpCsMKB0vpciRTs8Xh4r-O8dkAmzQKjdZnA&oe=65BFFCC2"
            alt=""
          />
          <h1>Md Najmul Hasan</h1>
          <p>Co-Founder</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            itaque accusamus quo voluptatibus fuga soluta iste odit corporis
            repudiandae nihil.
          </p>
        </div>
        <div className=" col-span-1  border  p-10 bg-pink-900 text-white rounded-2xl flex flex-col items-center gap-y-3 shadow-xl">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src="https://img.freepik.com/free-photo/girl-sunglasses_1157-6289.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <h1>Sumaya Kabir Reshma</h1>
          <p>Co-Founder</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            itaque accusamus quo voluptatibus fuga soluta iste odit corporis
            repudiandae nihil.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;

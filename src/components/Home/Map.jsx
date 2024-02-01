import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        className="w-full mt-1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.331346451383!2d90.42043137420654!3d23.73556078934805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b843225bd917%3A0xad227fc52c19785d!2sIdeal%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1706776683205!5m2!1sen!2sbd"
        height="450"
        allowFullscreen=""
        loading="lazy"
        referrePolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

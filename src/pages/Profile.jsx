import React from "react";

const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-8 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="mb-8 text-center">
          <img
            src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?size=626&ext=jpg&uid=R95679985&ga=GA1.1.1242648836.1702358523&semt=sph" // Replace with your profile image URL
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">Your Name</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>

        <div className="text-gray-800">
          <p className="mb-4">
            Hello, I'm a web developer passionate about creating amazing
            websites and applications.
          </p>

          <p className="mb-4">
            Let's connect! You can find me on{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              LinkedIn
            </a>
            .
          </p>

          <p>
            Feel free to reach out to me at{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-blue-500 underline"
            >
              your.email@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

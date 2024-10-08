import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 md:px-24 absolute text-white">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 py-1 text-lg rounded-md hover:bg-opacity-70">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 py-1 text-lg bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

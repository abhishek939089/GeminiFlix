import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-32 flex justify-center items-center">
      <form className="bg-blue-200 p-6 px-16 rounded-lg">
        <input
          className="p-2 m-6 px-12 rounded-md text-black"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-8 bg-blue-400 text-white rounded-e-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

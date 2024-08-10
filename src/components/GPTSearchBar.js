import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_API } from "../utils/constants";
import { addGPTMoviesResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const genAI = new GoogleGenerativeAI(GEMINI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      "Act as a Movie Recommendation system" +
      searchText.current.value +
      "only give names of top movies, separated by commas and remove \n from the response";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    const gptMovies = text.split(", ");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const movieResults = await Promise.all(promiseArray);
    console.log(movieResults);

    dispatch(
      addGPTMoviesResult({ movieNames: gptMovies, movieResults: movieResults })
    );
  };

  return (
    <div className="pt-32 flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300  p-8 px-20 rounded-xl shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <input
          ref={searchText}
          className="p-3 w-full sm:w-96 px-12 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearchClick}
          className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

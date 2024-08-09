import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import gptSlice from "../utils/gptSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import lang from "../utils/langConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });

    // unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    // toggle gpt search
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-screen px-28 py-2 bg-black z-30  flex justify-between top-0">
      <img className="w-32" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="bg-gray-900 text-white p-2 m-2 rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 py-2 px-4 mx-3 my-1 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-11 h-11 rounded-sm"
            src={user?.photoURL}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="m-2 font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

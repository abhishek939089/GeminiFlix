import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
          alt="logo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <form className="absolute p-10 bg-black bg-opacity-80 my-32 mx-auto right-0 left-0 text-white w-3/12 rounded-lg">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full bg-transparent border rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 w-full bg-transparent border rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-transparent border rounded-sm"
          />
          <button className="p-2 my-4 bg-red-700 w-full rounded-sm ">
            Sign In
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to netflix? Sign up now"
              : "Already registered? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

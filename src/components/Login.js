import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleClickButton = () => {
    const message = checkvalidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          src={BG_URL}
          alt="logo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute p-10 bg-black bg-opacity-80 my-32 mx-auto right-0 left-0 text-white w-full md:w-3/12 rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full bg-transparent border rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 w-full bg-transparent border rounded-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-transparent border rounded-sm"
          />
          <p className="text-red-500 py-2 text-bold text-lg">{errorMessage}</p>
          <button
            className="p-2 my-4 bg-red-700 w-full rounded-sm"
            onClick={handleClickButton}
          >
            {isSignInForm ? "Sign In" : "Sign up"}
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

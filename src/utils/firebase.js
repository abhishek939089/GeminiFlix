// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflixgpt-7fb43.firebaseapp.com",
  projectId: "netflixgpt-7fb43",
  storageBucket: "netflixgpt-7fb43.appspot.com",
  messagingSenderId: "703001553488",
  appId: "1:703001553488:web:9384ed560b139de800bf55",
  measurementId: "G-JV1DV6ZH7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

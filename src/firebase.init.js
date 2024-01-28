// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLJ92aMHn121REJ7kJK7wdBu-925LSiSo",
  authDomain: "solardigitalmarketing-ae0ef.firebaseapp.com",
  projectId: "solardigitalmarketing-ae0ef",
  storageBucket: "solardigitalmarketing-ae0ef.appspot.com",
  messagingSenderId: "597936772293",
  appId: "1:597936772293:web:920ac939a80b9178530cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
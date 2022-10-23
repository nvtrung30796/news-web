// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLQNHE_MTv3olOmq7qquFT8Sz36iNLDk",
  authDomain: "trungnguyen-news37-c4db9.firebaseapp.com",
  projectId: "trungnguyen-news37-c4db9",
  storageBucket: "trungnguyen-news37-c4db9.appspot.com",
  messagingSenderId: "755375845781",
  appId: "1:755375845781:web:8ad61d220435c38b12469c",
  measurementId: "G-4KBHGRJ272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
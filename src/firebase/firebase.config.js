// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2yjLhWtuZnNXWCgswi9H14NkKaOsRQtQ",
  authDomain: "travel-guru-mahadi.firebaseapp.com",
  projectId: "travel-guru-mahadi",
  storageBucket: "travel-guru-mahadi.appspot.com",
  messagingSenderId: "1073887229844",
  appId: "1:1073887229844:web:196c16a4c60c2245164181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
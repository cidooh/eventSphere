import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOC1vV6DZjoZB23Dd3PYU2CY1MP5P8Mdk",
  authDomain: "event-sphere-e22f4.firebaseapp.com",
  projectId: "event-sphere-e22f4",
  storageBucket: "event-sphere-e22f4.firebasestorage.app",
  messagingSenderId: "141562394082",
  appId: "1:141562394082:web:f5bf68a9aa189fe2f6f5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app=getAuth(app)
export { app, auth }
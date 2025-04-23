// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgeNOsP_PQZDJDTmFNRwYIINthbj1_GI",
  authDomain: "aurahaus-spa.firebaseapp.com",
  projectId: "aurahaus-spa",
  storageBucket: "aurahaus-spa.firebasestorage.app",
  messagingSenderId: "847205490996",
  appId: "1:847205490996:web:3169c41a26df9e888f0561"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
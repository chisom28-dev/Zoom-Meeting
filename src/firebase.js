// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJjo9jYmQjgs5BJJ0s4qAeGikx5DMAOYY",
  authDomain: "video-connect-1021e.firebaseapp.com",
  projectId: "video-connect-1021e",
  storageBucket: "video-connect-1021e.appspot.com",
  messagingSenderId: "770205969010",
  appId: "1:770205969010:web:c01af6436c39f57c94f0eb",
  measurementId: "G-8MWFJ9S8GB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Optional: Initialize Analytics
export const analytics = getAnalytics(app);

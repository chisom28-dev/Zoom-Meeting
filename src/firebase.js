// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
 apikey: import.meta.env.VITE_apiKey,
 authDomain: import.meta.env.VITE_authDomain,
 projectId: import.meta.env.VITE_projectId,
 storageBucket: import.meta.env.VITE_storageBucket,
 messagingSenderId: import.meta.env.VITE_messagingSenderId,
 appId: import.meta.env.VITE_appId,
 VITE_measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Optional: Initialize Analytics
export const analytics = getAnalytics(app);

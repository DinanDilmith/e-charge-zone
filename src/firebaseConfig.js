// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbGlvjKBiITjx733p4369nYCNj5wltLU4",
    authDomain: "e-chargezone.firebaseapp.com",
    projectId: "e-chargezone",
    storageBucket: "e-chargezone.appspot.com",
    messagingSenderId: "375578650660",
    appId: "1:375578650660:web:fd6edd325525688ac6d0b1",
    measurementId: "G-TCW2XFDY7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);

export const db = getFirestore(app); // Export Firestore instance
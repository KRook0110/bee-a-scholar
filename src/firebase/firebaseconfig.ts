
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV34FNyVaJ_6D8kBJ0Jenh-rNuGCKb6BA",
  authDomain: "bee-a-scholar.firebaseapp.com",
  projectId: "bee-a-scholar",
  storageBucket: "bee-a-scholar.appspot.com",
  messagingSenderId: "332890391126",
  appId: "1:332890391126:web:c37e95bcd2ceaae94871f7",
  measurementId: "G-MC9V4N54TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAV34FNyVaJ_6D8kBJ0Jenh-rNuGCKb6BA",
  authDomain: "bee-a-scholar.firebaseapp.com",
  projectId: "bee-a-scholar",
  storageBucket: "bee-a-scholar.appspot.com",
  messagingSenderId: "332890391126",
  appId: "1:332890391126:web:c37e95bcd2ceaae94871f7",
  measurementId: "G-MC9V4N54TJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app);

export const loginEmailPass = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const createNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const addToDB = async (databaseName, id, dataDict) => {
  const docRef = doc(db, databaseName, id);
  await setDoc(docRef, dataDict);
}

export const getData = async (databaseName, id) => {
  try {
    const docRef = doc(db, databaseName, id);
    const temp = await getDoc(docRef);

    if (temp.exists()) {
      return temp.data(); // Extracts the document data if it exists
    } else {
      console.log("No such document!");
      return null; // Return null if the document does not exist
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null; // Handle errors gracefully
  }
};

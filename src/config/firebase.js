import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore'
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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);

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

export const addToDBNoID = async (databaseName, dataDict) => {
  try {
    const docRef = await addDoc(collection(db, databaseName), dataDict);
    console.log("Document added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async (databaseName, id) => {
  try {
    console.log(databaseName, id)

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

export const getCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName)); // Specify your collection name
    const documents = [];

    querySnapshot.forEach((doc) => {
      // Push each document's data into an array
      documents.push({ id: doc.id, ...doc.data() });
    });

    console.log(documents); // Log or process the documents
    return documents; // Return the documents if needed

  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const queryCollectionByField = async (collectionName, fieldName, value) => {
  try {
    // Create a reference to the collection
    const collectionRef = collection(db, collectionName);

    // Create a query where the field equals the provided value
    const q = query(collectionRef, where(fieldName, "==", value));

    // Get the documents that match the query
    const querySnapshot = await getDocs(q);

    // Check if there are documents that match
    if (querySnapshot.empty) {
      console.log("No documents found matching the query.");
      return [];
    }

    // Extract the data from each document
    const results = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log("Query Results:", results);
    return results; // Return the results
  } catch (error) {
    console.error("Error querying the collection:", error);
    return []; // Return an empty array in case of error
  }
};

export const handleLogout = async () => {
  const auth = getAuth(); // Get Firebase Authentication instance
  try {
    await signOut(auth); // Sign the user out
    window.location.href = '/'; // Redirect to home page or login page after logout
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const updateInDB = async (collectionName, documentId, data) => {
  try {
    const docRef = doc(db, collectionName, documentId); // Reference to the document to update
    await updateDoc(docRef, data); // Update the document with the new data
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
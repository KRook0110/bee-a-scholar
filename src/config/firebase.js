import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from 'firebase/firestore'

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
      return temp.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};

export const getRef = async (databaseName, id) => {
  try {
    const docRef = doc(db, databaseName, id);
    return docRef
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};

export const getCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];

    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });

    console.log(documents)
    return documents

  } catch (error) {
    console.error('Error getting documents: ', error)
  }
};

export const queryCollectionByField = async (collectionName, fieldName, value) => {
  try {
    const collectionRef = collection(db, collectionName)

    const q = query(collectionRef, where(fieldName, "==", value))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      console.log("No documents found matching the query.")
      return []
    }

    const results = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    console.log("Query Results:", results)
    return results
  } catch (error) {
    console.error("Error querying the collection:", error)
    return []
  }
}

export const handleLogout = async () => {
  const auth = getAuth()
  try {
    await signOut(auth)
    window.location.href = '/'
  } catch (error) {
    console.error("Error signing out:", error)
  }
}

export const updateInDB = async (collectionName, documentId, data) => {
  try {
    const docRef = doc(db, collectionName, documentId)
    await updateDoc(docRef, data)
    console.log("Document updated successfully")
  } catch (error) {
    console.error("Error updating document: ", error)
  }
}
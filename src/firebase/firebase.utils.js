import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const config = {
  apiKey: "AIzaSyCwC-KPIpy9yr5vDWjc6SRpsDEfDQjZvOE",
  authDomain: "crwn-db-de2d1.firebaseapp.com",
  projectId: "crwn-db-de2d1",
  storageBucket: "crwn-db-de2d1.appspot.com",
  messagingSenderId: "476209862007",
  appId: "1:476209862007:web:7424759860f19b9e497d72",
};
const firebase = initializeApp(config);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(database, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err, "error creating the user");
    }
  }

  return userRef;
};
export const database = getFirestore();
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;

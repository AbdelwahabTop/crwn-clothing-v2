import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd-Pd1QAI5JjqcLGBdjnIkShkrZZNIe0g",
  authDomain: "crwn-clothing-db-2491d.firebaseapp.com",
  projectId: "crwn-clothing-db-2491d",
  storageBucket: "crwn-clothing-db-2491d.appspot.com",
  messagingSenderId: "419984083741",
  appId: "1:419984083741:web:56c01337569be3ffddeff4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmS2qq50tn5v888j957KCaG0xND1Ol7Ys",
  authDomain: "netflix-clone-maram.firebaseapp.com",
  projectId: "netflix-clone-maram",
  storageBucket: "netflix-clone-maram.firebasestorage.app",
  messagingSenderId: "23141348095",
  appId: "1:23141348095:web:0f2f321788934622c152ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;



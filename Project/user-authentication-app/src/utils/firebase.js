import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIt_t3yKtWsgn69YH0YRWnu3luw-9V4WQ",
  authDomain: "fir-with-react-5c5f1.firebaseapp.com",
  projectId: "fir-with-react-5c5f1",
  storageBucket: "fir-with-react-5c5f1.appspot.com",
  messagingSenderId: "1084331437907",
  appId: "1:1084331437907:web:807822370ed7c46df8fba6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,sendPasswordResetEmail,
  signInWithPopup,
  signOut,
  googleProvider,GoogleAuthProvider
};

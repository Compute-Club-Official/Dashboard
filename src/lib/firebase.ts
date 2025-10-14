// Firebase config and initialization for Discord-only auth
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvJw5EFWYal1mowQiIkBgFXiydGdcx7Bg",
  authDomain: "dashboard-126ce.firebaseapp.com",
  projectId: "dashboard-126ce",
  storageBucket: "dashboard-126ce.firebasestorage.app",
  messagingSenderId: "34582727111",
  appId: "1:34582727111:web:f8589748ae574767e4b1e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

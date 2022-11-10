import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB48rhWM9fnQE6v7MKxbUKUMkZ0v_mdZLE",
  authDomain: "anukaprabhashintegrated.firebaseapp.com",
  projectId: "anukaprabhashintegrated",
  storageBucket: "anukaprabhashintegrated.appspot.com",
  messagingSenderId: "296434338753",
  appId: "1:296434338753:web:f03dc6ace61530ae7a7d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

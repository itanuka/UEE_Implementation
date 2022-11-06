import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AxhhhyDvrzaBjC5yIVHLEqe81O-7JeQwQEJjOz8",
  authDomain: "react-native-crud-new-8d9fc.firebaseapp.com",
  projectId: "react-native-crud-8d9fc",
  storageBucket: "react-native-crud-8d9fc.appspot.com",
  messagingSenderId: "65193596469",
  appId: "1:6518935969:web:5fd42fc854888ccb06ac7c",
  measurementId: "G-DMNVMT54LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

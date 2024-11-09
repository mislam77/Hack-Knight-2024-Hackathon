import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC0TYD55tRvrzrj5TSC7K-1AHAAGW7ziiY",
  authDomain: "hack-knight-2024.firebaseapp.com",
  projectId: "hack-knight-2024",
  storageBucket: "hack-knight-2024.firebaseapp.com",
  messagingSenderId: "1064586174244",
  appId: "1:1064586174244:web:8586b15ad328aacab85db1",
  measurementId: "G-04LHMWF295",
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
const FIREBASE_DB = getFirestore(FIREBASE_APP);

const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE };
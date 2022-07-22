import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-CgDY_gXmjNJl8N4e209k8NWFbqZ62ws",
  authDomain: "house-marketplace-dbf5f.firebaseapp.com",
  projectId: "house-marketplace-dbf5f",
  storageBucket: "house-marketplace-dbf5f.appspot.com",
  messagingSenderId: "235308455005",
  appId: "1:235308455005:web:124b6fd8be016e063829b4",
  measurementId: "G-JHYMXWSN5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

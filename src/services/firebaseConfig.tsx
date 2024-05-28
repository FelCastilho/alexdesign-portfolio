// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXR0RA1dKAE_0OpDyyP4kMkEbRy3znDWg",
  authDomain: "portfolio-21619.firebaseapp.com",
  projectId: "portfolio-21619",
  storageBucket: "portfolio-21619.appspot.com",
  messagingSenderId: "17634361523",
  appId: "1:17634361523:web:1ab003a8bb831e93d930c6",
  measurementId: "G-NQDM34BG6Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

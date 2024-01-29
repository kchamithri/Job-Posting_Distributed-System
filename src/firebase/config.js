import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAowf8aHgNl2-3XRC3s5soHcNeFmaiOrxU",
  authDomain: "job-posting-distributed-system.firebaseapp.com",
  projectId: "job-posting-distributed-system",
  storageBucket: "job-posting-distributed-system.appspot.com",
  messagingSenderId: "17239140284",
  appId: "1:17239140284:web:a63e7352650edeaec1edb9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

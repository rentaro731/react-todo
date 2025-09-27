import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwp4AqfnJ7jwKwrGNHqllaO9hfnvK4fMI",
  authDomain: "todo-manegement-dc332.firebaseapp.com",
  projectId: "todo-manegement-dc332",
  storageBucket: "todo-manegement-dc332.firebasestorage.app",
  messagingSenderId: "1035779030526",
  appId: "1:1035779030526:web:009db0f17dc8d9b75f14af",
  measurementId: "G-K0ZV393PHJ",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

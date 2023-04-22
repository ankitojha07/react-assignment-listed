import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALrS9PTunTEKOueOouA4icbljzgIS9oPg",
  authDomain: "listed-assignment-ac556.firebaseapp.com",
  projectId: "listed-assignment-ac556",
  storageBucket: "listed-assignment-ac556.appspot.com",
  messagingSenderId: "238306971591",
  appId: "1:238306971591:web:6f2463c966e438bc2913e2",
  measurementId: "G-JZBPCH8TM7",
  databaseURL: "https://listed-assignment-ac556-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);

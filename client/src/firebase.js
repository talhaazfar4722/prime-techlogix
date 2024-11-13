// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prime-blog-7ad58.firebaseapp.com",
  projectId: "prime-blog-7ad58",
  storageBucket: "prime-blog-7ad58.firebasestorage.app",
  messagingSenderId: "356017352490",
  appId: "1:356017352490:web:6212b6c0fd0b4b8ec53853"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

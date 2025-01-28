// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "new-blog-2552d.firebaseapp.com",
  projectId: "new-blog-2552d",
  storageBucket: "new-blog-2552d.firebasestorage.app",
  messagingSenderId: "236925557941",
  appId: "1:236925557941:web:ee98fe1cb0625dee3b72fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
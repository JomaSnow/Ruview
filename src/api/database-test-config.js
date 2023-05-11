// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd61KrTF3iR2UYGblfY9raT0OPD8pRKvQ",
  authDomain: "ruview-4c7f4.firebaseapp.com",
  projectId: "ruview-4c7f4",
  storageBucket: "ruview-4c7f4.appspot.com",
  messagingSenderId: "950258914166",
  appId: "1:950258914166:web:ebfce94ce6e6de97ce2057",
};

// It's OK to expose Firebase's API Key: https://medium.com/@paulbreslin/is-it-safe-to-expose-your-firebase-api-key-to-the-public-7e5bd01e637b#:~:text=In%20a%20word%2C%20yes.,security%20risk%20to%20expose%20it.

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuJ2uQZLZBln8prU7SqPsNrTskgfTuhK8",
  authDomain: "coburgcare.firebaseapp.com",
  databaseURL: "https://coburgcare-default-rtdb.firebaseio.com",
  projectId: "coburgcare",
  storageBucket: "coburgcare.firebasestorage.app",
  messagingSenderId: "606046924141",
  appId: "1:606046924141:web:d4b1adab394ffb3b283e64",
  measurementId: "G-6B6YB4B98D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Optional: Log Firebase status
console.log("Firebase initialized:", app.name);

export { db };

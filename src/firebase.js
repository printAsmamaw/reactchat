import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAa7TqWhGXsfkBdMu-JRUTZTrUYBpciFl4",
  authDomain: "checkout-d8e8a.firebaseapp.com",
  projectId: "checkout-d8e8a",
  storageBucket: "checkout-d8e8a.appspot.com",
  messagingSenderId: "698903954145",
  appId: "1:698903954145:web:52c7ddfd9dd56286c46da0"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db = getFirestore(app);
export {auth, db};


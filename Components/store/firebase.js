import {
  initializeApp
} from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";
import {
  getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzyvaTyqsVjZKwMp9HGqcxl0dSQl5rRsg",
  authDomain: "products-dced8.firebaseapp.com",
  projectId: "products-dced8",
  storageBucket: "products-dced8.appspot.com",
  messagingSenderId: "1062955071604",
  appId: "1:1062955071604:web:95cad811214e94cbc1f921"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
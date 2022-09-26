import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB4kmEryUynn5gf7dmdqDozaVfuhzKq6hY",
  authDomain: "new-swarn-holidays.firebaseapp.com",
  projectId: "new-swarn-holidays",
  storageBucket: "new-swarn-holidays.appspot.com",
  messagingSenderId: "376885039169",
  appId: "1:376885039169:web:9650f722444342ba0536c0",
  measurementId: "G-7K4DCBE30K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
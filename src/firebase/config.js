import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1Ae_F6mpYS0uP5tZY94UFxOF5wodDbEI",
  authDomain: "final-react-efcd5.firebaseapp.com",
  projectId: "final-react-efcd5",
  storageBucket: "final-react-efcd5.appspot.com",
  messagingSenderId: "778398521116",
  appId: "1:778398521116:web:6db2f998b7c3e3b88b4cd9",
  measurementId: "G-XZ3F1TK2SD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {auth};
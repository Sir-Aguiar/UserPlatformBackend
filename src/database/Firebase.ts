import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAgX48rgQ_xU7TPBrSsRzp2RPqxB4Hcjo",
  authDomain: "registerapi-3a7f2.firebaseapp.com",
  projectId: "registerapi-3a7f2",
  storageBucket: "registerapi-3a7f2.appspot.com",
  messagingSenderId: "947451519974",
  appId: "1:947451519974:web:12812d47fd399063446c27",
  measurementId: "G-JHDQNKYRWS",
};

const FirebaseApp = initializeApp(firebaseConfig);
const Firestore = getFirestore()
export { FirebaseApp,Firestore };

import 'dotenv/config'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const ClassesDataBaseConfig = {
  apiKey: process.env.TURMAS_APIKEY,
  authDomain: process.env.TURMAS_AUTHDOMAIN,
  projectId: process.env.TURMAS_PROJECTID,
  storageBucket: process.env.TURMAS_STORAGEBUCKET,
  messagingSenderId: process.env.TURMAS_MESSAGINGSENDERID,
  appId: process.env.TURMAS_APPID,
  measurementId: process.env.MEASUREMENTID,
};

const ClassesFirebaseApp = initializeApp(ClassesDataBaseConfig);
const ClassesDatabase = getFirestore(ClassesFirebaseApp);
export { ClassesDatabase, ClassesFirebaseApp };

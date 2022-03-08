import {
  collection,
  where,
  query,
  getDoc,
  getDocs,
  doc,
  DocumentData,
} from "firebase/firestore";
import { Firestore } from "../../database/Firebase";
const FindStudentByLogin = async (login: string) => {
  const docRef = doc(Firestore, "Alunos", login);
  const docSnap = await getDoc(docRef);
  return docSnap;
};
const FindStudentsByName = async (name: string) => {
  const classQuery = query(
    collection(Firestore, "Alunos"),
    where("Name", "==", name)
  );
  const querySnapshot = await getDocs(classQuery);
  const students: DocumentData[] = [];
  querySnapshot.forEach((snapshot) => {
    students.push(snapshot.data());
  });
  return students;
};
const FindStudentsByClass = async (_class: string) => {
  const classQuery = query(
    collection(Firestore, "Alunos"),
    where("Class", "==", _class)
  );
  const querySnapshot = await getDocs(classQuery);
  const students: DocumentData[] = [];
  querySnapshot.forEach((snapshot) => {
    students.push(snapshot.data());
  });
  return students;
};
export { FindStudentByLogin, FindStudentsByName, FindStudentsByClass };

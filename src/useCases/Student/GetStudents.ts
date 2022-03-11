import {
  collection,
  where,
  query,
  getDoc,
  getDocs,
  doc,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { StudentOnDataBase } from "../../database/entities/Student";
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
  const querySnapshot = await getDocs(classQuery) as QuerySnapshot<StudentOnDataBase>;
  const students: StudentOnDataBase[] = [];
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
  const querySnapshot = (await getDocs(
    classQuery
  )) as QuerySnapshot<StudentOnDataBase>;
  const students: StudentOnDataBase[] = [];
  querySnapshot.forEach((snapshot) => {
    students.push(snapshot.data());
  });
  return students;
};
export { FindStudentByLogin, FindStudentsByName, FindStudentsByClass };

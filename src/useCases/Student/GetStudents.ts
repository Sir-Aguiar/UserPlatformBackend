import { collection, where, query, getDoc, getDocs, doc, DocumentData, QuerySnapshot } from "firebase/firestore";
import { StudentOnDataBase } from "../../database/entities/Student";
import { UsersDatabase } from "../../database/Firebase";
const FindStudentByLogin = async (login: string) => {
  const docRef = doc(UsersDatabase, "Alunos", login);
  const docSnap = await getDoc(docRef);
  return docSnap;
};
const FindStudentsByName = async (name: string) => {
  const classQuery = query(collection(UsersDatabase, "Alunos"), where("Name", "==", name));
  const querySnapshot = (await getDocs(classQuery)) as QuerySnapshot<StudentOnDataBase>;
  const students: StudentOnDataBase[] = [];
  querySnapshot.forEach((snapshot) => {
    students.push(snapshot.data());
  });
  return students;
};
const FindStudentsByClass = async (_class: string) => {
  const classQuery = query(collection(UsersDatabase, "Alunos"), where("Class", "==", _class));
  const querySnapshot = (await getDocs(classQuery)) as QuerySnapshot<StudentOnDataBase>;
  const students: StudentOnDataBase[] = [];
  querySnapshot.forEach((snapshot) => {
    students.push(snapshot.data());
  });
  return students;
};
const FindStudentByEmail = async (email: string) => {
  const docRef = collection(UsersDatabase, "Alunos");
  const docQuery = where("Email", "==", email);
  const foundDocs = await getDocs(query(docRef, docQuery));
  const documents: DocumentData[] = [];
  foundDocs.forEach((doc) => {
    if (doc.exists()) {
      documents.push(doc.data());
    }
  });
  return documents;
};
export { FindStudentByLogin, FindStudentsByName, FindStudentsByClass, FindStudentByEmail };

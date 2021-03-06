import {
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { ProfessorOnDataBase } from "../../database/DataBaseTypes";
import { UsersDatabase } from "../../database/Firebase";

const FindProfessorByLogin = async (login: string) => {
  try {
    const docSnap = (await getDoc(doc(UsersDatabase, "Professores", login))) as DocumentSnapshot<ProfessorOnDataBase>;
    return docSnap;
  } catch (e) {
    throw new Error("There was an unknown error");
  }
};

const FindProfessorsByDiscipline = async (discipline: string) => {
  try {
    const queryRef = query(collection(UsersDatabase, "Professores"), where("Discipline", "==", discipline));
    const querySnap = (await getDocs(queryRef)) as QuerySnapshot<ProfessorOnDataBase>;
    const foundProfessors: ProfessorOnDataBase[] = [];
    querySnap.forEach((snap) => foundProfessors.push(snap.data()));
    return foundProfessors;
  } catch (e) {
    throw new Error("There was an unknown error");
  }
};
const FindStudentByEmail = async (email: string) => {
  const docRef = collection(UsersDatabase, "Professores");
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
export { FindProfessorByLogin, FindProfessorsByDiscipline,FindStudentByEmail };

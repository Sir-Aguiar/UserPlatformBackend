import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { UsersDatabase } from "../../database/Firebase";

const FindProfessorByLogin = async (login: string) => {
  const docSnap = await getDoc(doc(UsersDatabase, "Professores", login));
  return docSnap;
};

const FindProfessorsByDiscipline = async (discipline: string) => {
  const queryRef = query(
    collection(UsersDatabase, "Professores"),
    where("Discipline", "==", discipline)
  );
  const querySnap = await getDocs(queryRef);
  const foundProfessors: DocumentData[] = [];
  querySnap.forEach((snap) => foundProfessors.push(snap.data()));
  return foundProfessors;
};
export {
  FindProfessorByLogin,
  FindProfessorsByDiscipline,
};

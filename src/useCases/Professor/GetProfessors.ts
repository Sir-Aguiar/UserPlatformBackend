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
import { ProfessorOnDataBase } from "../../database/entities/Professor";
import { UsersDatabase } from "../../database/Firebase";

const FindProfessorByLogin = async (login: string) => {
  const docSnap = (await getDoc(doc(UsersDatabase, "Professores", login))) as DocumentSnapshot<ProfessorOnDataBase>;
  return docSnap;
};

const FindProfessorsByDiscipline = async (discipline: string) => {
  const queryRef = query(collection(UsersDatabase, "Professores"), where("Discipline", "==", discipline));
  const querySnap = (await getDocs(queryRef)) as QuerySnapshot<ProfessorOnDataBase>;
  const foundProfessors: ProfessorOnDataBase[] = [];
  querySnap.forEach((snap) => foundProfessors.push(snap.data()));
  return foundProfessors;
};

export { FindProfessorByLogin, FindProfessorsByDiscipline };

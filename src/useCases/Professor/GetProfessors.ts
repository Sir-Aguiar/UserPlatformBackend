import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Firestore } from "../../database/Firebase";

const FindProfessorByLogin = async (login: string) => {
  const docSnap = await getDoc(doc(Firestore, "Professores", login));
  return docSnap;
};
const CheckProfessorBy_id = async (_id: string|string[]) => {
  const queryRef = query(
    collection(Firestore, "Professores"),
    where("_id", "==", _id)
  );
  const querySnap = await getDocs(queryRef);
  let professorisValid: boolean = false;
  querySnap.forEach((snap) => {
    professorisValid = snap.exists();
  });
  return professorisValid;
};
const FindProfessorsByDiscipline = async (discipline: string) => {
  const queryRef = query(
    collection(Firestore, "Professores"),
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
  CheckProfessorBy_id,
};

import {
  collection,
  getDocs,
  where,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { ProfessorOnDataBase } from "../../../database/DataBaseTypes";
import { UsersDatabase } from "../../../database/Firebase";

const CheckProfessorValidity = async (_id: string | string[] = "####",_class: string) => {
  const ProfessorQuery = query(
    collection(UsersDatabase, "Professores"),
    where("_id", "==", _id)
  );
  const ProfessorsSnapshot = (await getDocs(
    ProfessorQuery
  )) as QuerySnapshot<ProfessorOnDataBase>;
  let validateStatus: boolean = false;
  ProfessorsSnapshot.forEach((snap) => {
    validateStatus = snap.exists() && snap.data().Classes.includes(_class);
  });
  return validateStatus;
};
export {CheckProfessorValidity}

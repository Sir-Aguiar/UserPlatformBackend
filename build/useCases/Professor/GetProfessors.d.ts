import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { ProfessorOnDataBase } from "../../database/DataBaseTypes";
declare const FindProfessorByLogin: (login: string) => Promise<DocumentSnapshot<ProfessorOnDataBase>>;
declare const FindProfessorsByDiscipline: (discipline: string) => Promise<ProfessorOnDataBase[]>;
declare const FindStudentByEmail: (email: string) => Promise<DocumentData[]>;
export { FindProfessorByLogin, FindProfessorsByDiscipline, FindStudentByEmail };

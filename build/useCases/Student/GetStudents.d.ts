import { DocumentData } from "firebase/firestore";
import { StudentOnDataBase } from "../../database/DataBaseTypes";
declare const FindStudentByLogin: (login: string) => Promise<import("@firebase/firestore").DocumentSnapshot<DocumentData>>;
declare const FindStudentsByName: (name: string) => Promise<StudentOnDataBase[]>;
declare const FindStudentsByClass: (_class: string) => Promise<StudentOnDataBase[]>;
declare const FindStudentByEmail: (email: string) => Promise<DocumentData[]>;
export { FindStudentByLogin, FindStudentsByName, FindStudentsByClass, FindStudentByEmail };

import { FirestoreDataConverter } from "firebase/firestore";
import { StudentOnDataBase } from "../DataBaseTypes";
declare class StudentModel implements StudentOnDataBase {
    readonly _id: string;
    readonly Name: string;
    readonly Password: string;
    readonly Email: string;
    readonly Class: string;
    readonly Username: string;
    readonly Status: number;
    constructor(props: StudentOnDataBase);
}
declare const studentConverter: FirestoreDataConverter<StudentModel>;
export { studentConverter };

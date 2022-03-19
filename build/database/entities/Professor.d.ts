import { FirestoreDataConverter } from "firebase/firestore";
import { ProfessorOnDataBase } from "../DataBaseTypes";
declare class ProfessorsModel {
    readonly _id: string;
    readonly Email: string;
    readonly Name: string;
    readonly Classes: string[];
    readonly Discipline: string;
    readonly Username: string;
    readonly Password: string;
    constructor(props: ProfessorOnDataBase);
    test(): void;
}
declare const professorsConverter: FirestoreDataConverter<ProfessorsModel>;
export { professorsConverter, ProfessorsModel };

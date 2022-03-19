import { FirestoreDataConverter, QueryDocumentSnapshot } from "firebase/firestore";
import { ProfessorOnDataBase } from "../DataBaseTypes";

class ProfessorsModel {
  readonly _id: string;
  readonly Email: string;
  readonly Name: string;
  readonly Classes: string[];
  readonly Discipline: string;
  readonly Username: string;
  readonly Password: string;
  constructor(props: ProfessorOnDataBase) {
    this._id = props._id;
    this.Email = props.Email;
    this.Name = props.Name;
    this.Classes = props.Classes;
    this.Discipline = props.Discipline;
    this.Username = props.Username;
    this.Password = props.Password;
  }
  public test() {
    console.log(this.Name);
  }
}

const professorsConverter: FirestoreDataConverter<ProfessorsModel> = {
  toFirestore: (professor) => {
    return {
      _id: professor._id,
      Email: professor.Email,
      Name: professor.Name,
      Classes: professor.Classes,
      Discipline: professor.Discipline,
      Username: professor.Username,
      Password: professor.Password,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<ProfessorOnDataBase>, options) => {
    const formatedObject = new ProfessorsModel(snapshot.data(options));
    return formatedObject;
  },
};
export { professorsConverter, ProfessorsModel };

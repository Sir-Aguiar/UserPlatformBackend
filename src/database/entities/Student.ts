import { FirestoreDataConverter, QueryDocumentSnapshot } from "firebase/firestore";

export interface StudentOnDataBase {
  _id: string;
  Name: string;
  Password: string;
  Email: string;
  Class: string;
  Username: string;
  Status: number;
}
class StudentModel {
  readonly _id: string;
  readonly Name: string;
  readonly Password: string;
  readonly Email: string;
  readonly Class: string;
  readonly Username: string;
  readonly Status: number;
  constructor(props: StudentOnDataBase) {
    this.Class = props.Class;
    this._id = props._id;
    this.Password = props.Password;
    this.Email = props.Email;
    this.Name = props.Name;
    this.Status = props.Status;
    this.Username = props.Username;
  }
}

export const studentConverter: FirestoreDataConverter<StudentModel> = {
  toFirestore: (student: StudentModel) => {
    return {
      Class: student.Class,
      Email: student.Email,
      Name: student.Name,
      Password: student.Password,
      Status: student.Status,
      Username: student.Status,
      _id: student._id,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<StudentModel>, options) => {
    const formatedData = snapshot.data(options);
    return new StudentModel(formatedData);
  },
};

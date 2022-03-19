import { FirestoreDataConverter, QueryDocumentSnapshot } from "firebase/firestore";
import { StudentOnDataBase } from "../DataBaseTypes";

class StudentModel implements StudentOnDataBase{
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
  public AA () {

  }
}

const studentConverter: FirestoreDataConverter<StudentModel> = {
  toFirestore: (student) => {
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
  fromFirestore: (snapshot: QueryDocumentSnapshot<StudentOnDataBase>, options) => {
    const formatedData = snapshot.data(options);
    const formatedObject = new StudentModel(formatedData)
    return formatedObject;
  },
};
export { studentConverter };

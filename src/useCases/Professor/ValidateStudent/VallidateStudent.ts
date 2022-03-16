import { arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { studentConverter, StudentOnDataBase } from "../../../database/entities/Student";
import { UsersDatabase } from "../../../database/Firebase";
import { FindStudentsByClass } from "../../Student/GetStudents";

const getStudentsToValidate = async (_class: string) => {
  const studentsFromClass = await FindStudentsByClass(_class);
  const studentsToValidate: StudentOnDataBase[] = [];
  studentsFromClass.forEach((student) => {
    if (student.Status === 1) {
      studentsToValidate.push(student);
    }
  });
  return studentsToValidate;
};
const ValidateStudent = async (studentLogin: string, state: number) => {
  const InsertStudentToClass = async () => {
    const studentToValidate = await getDoc(doc(UsersDatabase, "Alunos", studentLogin).withConverter(studentConverter));
    await updateDoc(doc(UsersDatabase, "Turmas", studentToValidate.data()?.Class || "ZZ#"), {
      Alunos: arrayUnion({
        _id: studentToValidate.data()?._id,
        Name: studentToValidate.data()?.Name,
        EE: [],
        EEC: [],
        EP: [],
      }),
    });
  };
  try {
    await updateDoc(doc(UsersDatabase, "Alunos", studentLogin), {
      Status: state,
    });
    await InsertStudentToClass()
  } catch (e) {
    throw new Error("Failed to change student state, try again later");
  }
};
export { getStudentsToValidate, ValidateStudent };

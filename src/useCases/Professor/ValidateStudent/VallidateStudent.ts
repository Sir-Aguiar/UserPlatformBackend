import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { StudentOnDataBase } from "../../../database/entities/Student";
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
  try {
    await updateDoc(doc(UsersDatabase, "Alunos", studentLogin), {
      Status: state,
    });
  } catch (e) {
    throw new Error("Failed to change student state, try again later");
  }
};
export { getStudentsToValidate, ValidateStudent };

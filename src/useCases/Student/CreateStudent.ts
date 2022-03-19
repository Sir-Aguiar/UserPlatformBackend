import { Student } from "../../entities/Student";
import { CreateStudentRequestDTO } from "./CreateStudentDTO";
import { UsersDatabase } from "../../database/Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { FindStudentByEmail, FindStudentByLogin } from "./GetStudents";
const CreateStudent = async (data: CreateStudentRequestDTO) => {
  const student = new Student(data);
  const insertStudentToDatabase = async () => {
    if ((await FindStudentByLogin(student.login)).exists()) {
      throw new Error("Nome de usuário já está em uso");
    }
    if ((await FindStudentByEmail(data.email)).length > 0) {
      throw new Error("Email já está em uso");
    }
    try {
      const studentInfos = {
        _id: student.id,
        Name: student.name,
        Password: student.password,
        Email: student.email,
        Class: student._class,
        Username: student.login,
        Status: 1,
      };
      const docRef = doc(collection(UsersDatabase, "Alunos"), student.login);
      const insertedDoc = await setDoc(docRef, studentInfos);
      return insertedDoc;
    } catch (e) {
      throw new Error("Insuficient information");
    }
  };
  return await insertStudentToDatabase();
};

export { CreateStudent };

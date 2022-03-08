import { Student } from "../../entities/Student";
import { CreateStudentRequestDTO } from "./CreateStudentDTO";
import { Firestore } from "../../database/Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { FindStudentByLogin } from "./GetStudents";

const CreateStudent = async (data: CreateStudentRequestDTO) => {
  const student = new Student(data);
  const insertStudentToDatabase = async () => {
    // Check if a user with the login already exists
    if ((await FindStudentByLogin(student.login)).exists()) {
      throw new Error("Username already taken");
    }
    try {
      // Setting new document (user) to database
      const insertedDoc = await setDoc(
        doc(collection(Firestore, "Alunos"), student.login),
        {
          _id: student.id,
          Name: student.name,
          Password: student.password,
          Email: student.email,
          Class: student._class,
          Username: student.login,
        }
      );
      return insertedDoc;
    } catch (e) {
      throw new Error("Insuficient information");
    }
  };
  return await insertStudentToDatabase();
};

export { CreateStudent };

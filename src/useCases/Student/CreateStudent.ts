import { Student } from "../../entities/Student";
import { CreateStudentRequestDTO } from "./CreateStudentDTO";
import { UsersDatabase } from "../../database/Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { FindStudentByEmail, FindStudentByLogin } from "./GetStudents";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth();
const CreateStudent = async (data: CreateStudentRequestDTO) => {
  const student = new Student(data);
  const insertStudentToDatabase = async () => {
    // Check if a user with the login already exists
    if ((await FindStudentByLogin(student.login)).exists()) {
      throw new Error("Username already taken");
    }
    if ((await FindStudentByEmail(data.email)).length > 0) {
      throw new Error("Email already taken");
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
      try {
        const credential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        return credential.user;
      } catch (err) {
        throw new Error("Email already taken");
      }
    } catch (e) {
      throw new Error("Insuficient information");
    }
  };
  return await insertStudentToDatabase();
};

export { CreateStudent };

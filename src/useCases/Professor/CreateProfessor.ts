import { collection, doc, setDoc } from "firebase/firestore";
import { UsersDatabase } from "../../database/Firebase";
import { Professor } from "../../entities/Professors";
import { CreateProfessorDTO } from "./CreateProfessorDTO";
import { FindProfessorByLogin } from "./GetProfessors";
import { InsertProfessorToClass } from "./InsertProfessorToClass/InsertProfessorToClass";
const CreateProfessor = async (props: CreateProfessorDTO) => {
  const professor = new Professor(props);
  if ((await FindProfessorByLogin(props.login)).exists()) {
    throw new Error("Username already taken");
  }
  const InsertProfessorInDataBase = async () => {
    try {
      const insertedDoc = await setDoc(doc(collection(UsersDatabase, "Professores"), professor.login), {
        _id: professor.id,
        Name: professor.name,
        Password: professor.password,
        Email: professor.email,
        Classes: professor._classes,
        Username: professor.login,
        Discipline: professor.discipline,
      });
      await InsertProfessorToClass(professor.name, professor.discipline, professor._classes, professor.id);
      return insertedDoc;
    } catch (e) {
      throw new Error("Insuficient information");
    }
  };
  return await InsertProfessorInDataBase();
};
export { CreateProfessor };

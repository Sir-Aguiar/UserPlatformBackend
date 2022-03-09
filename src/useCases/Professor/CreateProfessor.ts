import { collection, doc, setDoc } from "firebase/firestore";
import { Firestore } from "../../database/Firebase";
import { Professor } from "../../entities/Professors";
import { CreateProfessorDTO } from "./CreateProfessorDTO";
import { FindProfessorByLogin } from "./GetProfessors";
const CreateProfessor = async (props: CreateProfessorDTO) => {
  const professor = new Professor(props);
  if ((await FindProfessorByLogin(props.login)).exists()) {
    throw new Error("Username already taken");
  }
  const InsertProfessorInDataBase = async () => {
    try {
      const insertedDoc = await setDoc(
        doc(collection(Firestore, "Professores"), professor.login),
        {
          _id: professor.id,
          Name: professor.name,
          Password: professor.password,
          Email: professor.email,
          Classes: professor._classes,
          Username: professor.login,
          Discipline: professor.discipline,
        }
      );
      return insertedDoc;
    } catch (e) {
      throw new Error("Insuficient information");
    }
  };
  return await InsertProfessorInDataBase();
};
export { CreateProfessor };

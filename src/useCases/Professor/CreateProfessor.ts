import { arrayUnion, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { UsersDatabase } from "../../database/Firebase";
import { Professor } from "../../entities/Professors";
import { CreateProfessorDTO } from "./CreateProfessorDTO";
import { FindProfessorByLogin } from "./GetProfessors";

const CreateProfessor = async (props: CreateProfessorDTO) => {
  const professor = new Professor(props);

  if ((await FindProfessorByLogin(props.login)).exists()) {
    throw new Error("Username already taken");
  }
  const InserProfessorInClasses = async (
    name: string,
    _id: string | undefined,
    discipline: string,
    _classes: string[]
  ) => {
    _classes.forEach((_class) => {
      const docRef = doc(UsersDatabase, "Turmas", _class);
      updateDoc(docRef, {
        Professores: arrayUnion({
          _id: _id || "#",
          Name: name,
          Discipline: discipline
        }),
      }).then(() => {
        console.log("Inserido em ", _class);
      });
    });
  };
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
      await InserProfessorInClasses(professor.name, professor.id, professor.discipline, professor._classes);
      return insertedDoc;
    } catch (e) {
      throw new Error("Insuficient information");
    }
  };
  return await InsertProfessorInDataBase();
};
export { CreateProfessor };

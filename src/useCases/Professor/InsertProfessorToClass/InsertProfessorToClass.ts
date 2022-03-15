import { doc, updateDoc } from "firebase/firestore";
import { ClassesDatabase } from "../../../database/ClassesDataBase";

export const InsertProfessorToClass = async (
  name: string,
  discipline: string,
  _classes: string[],
  _id: string | undefined
) => {
  const professorInfos = {
    Name: name,
    Discipline: discipline,
  };
  _classes.forEach((_class) => {
    const docRef = doc(ClassesDatabase, _class, "Professores");
    const docToUpdate: any = {};
    docToUpdate[_id || "#"] = professorInfos;
    updateDoc(docRef, docToUpdate).then(() => {
      console.log("Inserido em", _class);
    });
  });
};

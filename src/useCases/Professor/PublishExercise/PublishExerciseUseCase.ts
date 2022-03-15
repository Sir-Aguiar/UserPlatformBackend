import { arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { uuid } from "uuidv4";
import { ClassesDatabase } from "../../../database/ClassesDataBase";
import { Exercise } from "./entities/Exercise";
import { IExercise, IExerciseDTO, IProfessorDTO } from "./PublishExerciseDTO";

const CreateExercise = async (
  exerciseCredential: IExerciseDTO,
  exerciseAuthor: IProfessorDTO,
  exerciseContent: IExercise
) => {
  const { _class, data, discipline, exerciseId } = exerciseCredential;
  const { _id: professorId, name } = exerciseAuthor;
  const { title, description, resolution } = exerciseContent;
  const exerciseModel = new Exercise(
    exerciseId,
    data,
    discipline,
    { professorId, name },
    title,
    description,
    resolution,
    _class
  );
  const exerciseToInsert = {
    exerciseId: exerciseModel.exerciseId,
    Autor: exerciseModel.writer,
    Data: exerciseModel.data,
    Descricao: exerciseModel.description,
    Resolucao: exerciseModel.resolution,
    Titulo: exerciseModel.title,
  };
  // Existe um método na entitie para publicação
  const insertOneExerciseToDataBase = async (_class: string, discipline: string) => {
    const docReference = doc(ClassesDatabase, _class, "Exercícios");
    const commandDocument: any = {};
    commandDocument[discipline] = arrayUnion(exerciseToInsert);
    await updateDoc(docReference, commandDocument);
  };
  await insertOneExerciseToDataBase(_class, discipline);
};

const writerInfos: IProfessorDTO = {
  _id: "146c6512-9cf5-42c5-9947-db8c5c073c78",
  name: "Josézinho da Silva Pereira",
};
const exerciseInfos: IExercise = {
  description: "Qualquer descrição",
  resolution: "Qualquer coisa mal feita",
  title: "Faz aí o exercício",
};
const exerciseCredentials: IExerciseDTO = {
  _class: "3D",
  data: new Date(),
  discipline: "Educação Física",
  exerciseId: uuid(),
};

CreateExercise(exerciseCredentials, writerInfos, exerciseInfos).then();

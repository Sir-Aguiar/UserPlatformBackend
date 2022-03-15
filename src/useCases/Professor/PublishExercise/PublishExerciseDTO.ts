// Necessário para credenciação do exercício, inserir no autor
export interface IProfessorDTO {
  _id: string;
  name: string;
}
// Necessário na criação do Exercício
export interface IExerciseDTO {
  exerciseId: string;
  discipline: string;
  data: Date;
  _class: string;
}
// Necessário na inserção do exercício
export interface IExercise {
  title: string;
  description: string;
  resolution: string;
}

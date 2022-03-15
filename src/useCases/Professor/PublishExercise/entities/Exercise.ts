type authorProfessor = {
  professorId: string;
  name: string;
};
interface IExerciseModel {
  readonly exerciseId: string;
  readonly title: string;
  description: string;
  readonly writer: authorProfessor;
  readonly data: Date;
  readonly discipline: string;
  resolution: string;
  readonly _class: string;
}
class Exercise implements IExerciseModel {
  constructor(
    readonly exerciseId: string,
    readonly data: Date,
    readonly discipline: string,
    readonly writer: authorProfessor,
    readonly title: string,
    public description: string,
    public resolution: string,
    readonly _class: string
  ) {}
  public async postExercise() {}
}
export { Exercise };

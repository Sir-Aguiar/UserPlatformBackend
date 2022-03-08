import { uuid } from "uuidv4";
interface Professores {
  id?: string;
  name: string;
  password: string;
  email: string;
  _classes: string[];
  discipline: string;
}
class Professor implements Professores {
  public readonly id?: string;
  public discipline: string;
  public name: string;
  public email: string;
  public password: string;
  public _classes: string[];
  constructor(studentData: Professor, id?: string) {
    this._classes = studentData._classes;
    this.name = studentData.name;
    this.email = studentData.email;
    this.password = studentData.password;
    this.discipline = studentData.discipline;
    if (!id) {
      this.id = uuid();
    }
  }
}
export { Professores, Professor };

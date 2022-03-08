import { uuid } from "uuidv4";
interface Estudante {
  id?: string;
  name: string;
  password: string;
  email: string;
  _class: string;
}
class Student implements Estudante {
  public readonly id?: string;
  public name: string;
  public email: string;
  public password: string;
  public _class: string;
  constructor(studentData: Estudante, id?: string) {
    this._class = studentData._class;
    this.name = studentData.name;
    this.email = studentData.email;
    this.password = studentData.password;
    if (!id) {
      this.id = uuid();
    }
  }
}
export { Estudante, Student };

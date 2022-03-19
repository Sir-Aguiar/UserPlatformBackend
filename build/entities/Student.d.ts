interface Estudante {
    id?: string;
    name: string;
    password: string;
    email: string;
    _class: string;
    login: string;
}
declare class Student implements Estudante {
    readonly id?: string;
    name: string;
    email: string;
    login: string;
    password: string;
    _class: string;
    constructor(studentData: Estudante, id?: string);
}
export { Estudante, Student };

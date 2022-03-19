interface Professores {
    id?: string;
    name: string;
    password: string;
    email: string;
    _classes: string[];
    discipline: string;
    login: string;
}
declare class Professor implements Professores {
    readonly id?: string;
    discipline: string;
    name: string;
    email: string;
    password: string;
    login: string;
    _classes: string[];
    constructor(studentData: Professor, id?: string);
}
export { Professores, Professor };

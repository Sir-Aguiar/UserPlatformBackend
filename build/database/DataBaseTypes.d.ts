interface ProfessorOnDataBase {
    _id: string;
    Email: string;
    Name: string;
    Classes: string[];
    Discipline: string;
    Username: string;
    Password: string;
}
interface StudentOnDataBase {
    _id: string;
    Name: string;
    Password: string;
    Email: string;
    Class: string;
    Username: string;
    Status: number;
}
export { ProfessorOnDataBase, StudentOnDataBase };

import { StudentOnDataBase } from "../../../database/DataBaseTypes";
declare const getStudentsToValidate: (_class: string) => Promise<StudentOnDataBase[]>;
declare const ValidateStudent: (studentLogin: string, state: number) => Promise<void>;
export { getStudentsToValidate, ValidateStudent };

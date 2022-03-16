"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const uuidv4_1 = require("uuidv4");
class Student {
    constructor(studentData, id) {
        this._class = studentData._class;
        this.name = studentData.name;
        this.email = studentData.email;
        this.password = studentData.password;
        this.login = studentData.login;
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
}
exports.Student = Student;

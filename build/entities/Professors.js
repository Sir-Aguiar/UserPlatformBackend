"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const uuidv4_1 = require("uuidv4");
class Professor {
    constructor(studentData, id) {
        this._classes = studentData._classes;
        this.name = studentData.name;
        this.email = studentData.email;
        this.password = studentData.password;
        this.discipline = studentData.discipline;
        this.login = studentData.login;
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
}
exports.Professor = Professor;

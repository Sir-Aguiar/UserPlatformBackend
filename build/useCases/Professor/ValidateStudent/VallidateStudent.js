"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateStudent = exports.getStudentsToValidate = void 0;
const firestore_1 = require("firebase/firestore");
const Student_1 = require("../../../database/entities/Student");
const Firebase_1 = require("../../../database/Firebase");
const GetStudents_1 = require("../../Student/GetStudents");
const getStudentsToValidate = async (_class) => {
    const studentsFromClass = await (0, GetStudents_1.FindStudentsByClass)(_class);
    const studentsToValidate = [];
    studentsFromClass.forEach((student) => {
        if (student.Status === 1) {
            studentsToValidate.push(student);
        }
    });
    return studentsToValidate;
};
exports.getStudentsToValidate = getStudentsToValidate;
const ValidateStudent = async (studentLogin, state) => {
    const InsertStudentToClass = async () => {
        const studentToValidate = await (0, firestore_1.getDoc)((0, firestore_1.doc)(Firebase_1.UsersDatabase, "Alunos", studentLogin).withConverter(Student_1.studentConverter));
        await (0, firestore_1.updateDoc)((0, firestore_1.doc)(Firebase_1.UsersDatabase, "Turmas", studentToValidate.data()?.Class || "ZZ#"), {
            Alunos: (0, firestore_1.arrayUnion)({
                _id: studentToValidate.data()?._id,
                Name: studentToValidate.data()?.Name,
                EE: [],
                EEC: [],
                EP: [],
            }),
        });
    };
    try {
        await (0, firestore_1.updateDoc)((0, firestore_1.doc)(Firebase_1.UsersDatabase, "Alunos", studentLogin), {
            Status: state,
        });
        await InsertStudentToClass();
    }
    catch (e) {
        throw new Error("Failed to change student state, try again later");
    }
};
exports.ValidateStudent = ValidateStudent;

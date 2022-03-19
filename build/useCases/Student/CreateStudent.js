"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudent = void 0;
const Student_1 = require("../../entities/Student");
const Firebase_1 = require("../../database/Firebase");
const firestore_1 = require("firebase/firestore");
const GetStudents_1 = require("./GetStudents");
const auth_1 = require("firebase/auth");
const auth = (0, auth_1.getAuth)();
const CreateStudent = async (data) => {
    const student = new Student_1.Student(data);
    const insertStudentToDatabase = async () => {
        if ((await (0, GetStudents_1.FindStudentByLogin)(student.login)).exists()) {
            throw new Error("Nome de usuário já está em uso");
        }
        if ((await (0, GetStudents_1.FindStudentByEmail)(data.email)).length > 0) {
            throw new Error("Email já está em uso");
        }
        try {
            const studentInfos = {
                _id: student.id,
                Name: student.name,
                Password: student.password,
                Email: student.email,
                Class: student._class,
                Username: student.login,
                Status: 1,
            };
            const docRef = (0, firestore_1.doc)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Alunos"), student.login);
            (0, firestore_1.setDoc)(docRef, studentInfos).then((res) => {
                (0, auth_1.createUserWithEmailAndPassword)(auth, student.email, student.password)
                    .then((res) => {
                    (0, auth_1.sendEmailVerification)(res.user).then();
                })
                    .catch((e) => {
                    return e.message;
                });
                return;
            });
        }
        catch (e) {
            throw new Error("Insuficient information");
        }
    };
    return await insertStudentToDatabase();
};
exports.CreateStudent = CreateStudent;

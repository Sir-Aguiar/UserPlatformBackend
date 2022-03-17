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
        // Check if a user with the login already exists
        if ((await (0, GetStudents_1.FindStudentByLogin)(student.login)).exists()) {
            throw new Error("Username already taken");
        }
        if ((await (0, GetStudents_1.FindStudentByEmail)(data.email)).length > 0) {
            throw new Error("Email already taken");
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
            const insertedDoc = await (0, firestore_1.setDoc)(docRef, studentInfos);
            try {
                const credential = await (0, auth_1.createUserWithEmailAndPassword)(auth, data.email, data.password);
                return credential.user;
            }
            catch (err) {
                throw new Error("Email already taken");
            }
        }
        catch (e) {
            throw new Error("Insuficient information");
        }
    };
    return await insertStudentToDatabase();
};
exports.CreateStudent = CreateStudent;

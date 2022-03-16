"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudent = void 0;
const Student_1 = require("../../entities/Student");
const Firebase_1 = require("../../database/Firebase");
const firestore_1 = require("firebase/firestore");
const GetStudents_1 = require("./GetStudents");
const CreateStudent = async (data) => {
    const student = new Student_1.Student(data);
    const insertStudentToDatabase = async () => {
        // Check if a user with the login already exists
        if ((await (0, GetStudents_1.FindStudentByLogin)(student.login)).exists()) {
            throw new Error("Username already taken");
        }
        try {
            // Setting new document (user) to database
            const insertedDoc = await (0, firestore_1.setDoc)((0, firestore_1.doc)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Alunos"), student.login), {
                _id: student.id,
                Name: student.name,
                Password: student.password,
                Email: student.email,
                Class: student._class,
                Username: student.login,
                Status: 1
            });
            return insertedDoc;
        }
        catch (e) {
            throw new Error("Insuficient information");
        }
    };
    return await insertStudentToDatabase();
};
exports.CreateStudent = CreateStudent;

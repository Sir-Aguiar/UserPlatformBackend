"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindStudentByEmail = exports.FindStudentsByClass = exports.FindStudentsByName = exports.FindStudentByLogin = void 0;
const firestore_1 = require("firebase/firestore");
const Firebase_1 = require("../../database/Firebase");
const FindStudentByLogin = async (login) => {
    const docRef = (0, firestore_1.doc)(Firebase_1.UsersDatabase, "Alunos", login);
    const docSnap = await (0, firestore_1.getDoc)(docRef);
    return docSnap;
};
exports.FindStudentByLogin = FindStudentByLogin;
const FindStudentsByName = async (name) => {
    const classQuery = (0, firestore_1.query)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Alunos"), (0, firestore_1.where)("Name", "==", name));
    const querySnapshot = (await (0, firestore_1.getDocs)(classQuery));
    const students = [];
    querySnapshot.forEach((snapshot) => {
        students.push(snapshot.data());
    });
    return students;
};
exports.FindStudentsByName = FindStudentsByName;
const FindStudentsByClass = async (_class) => {
    const classQuery = (0, firestore_1.query)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Alunos"), (0, firestore_1.where)("Class", "==", _class));
    const querySnapshot = (await (0, firestore_1.getDocs)(classQuery));
    const students = [];
    querySnapshot.forEach((snapshot) => {
        students.push(snapshot.data());
    });
    return students;
};
exports.FindStudentsByClass = FindStudentsByClass;
const FindStudentByEmail = async (email) => {
    const docRef = (0, firestore_1.collection)(Firebase_1.UsersDatabase, "Alunos");
    const docQuery = (0, firestore_1.where)("Email", "==", email);
    const foundDocs = await (0, firestore_1.getDocs)((0, firestore_1.query)(docRef, docQuery));
    const documents = [];
    foundDocs.forEach((doc) => {
        if (doc.exists()) {
            documents.push(doc.data());
        }
    });
    return documents;
};
exports.FindStudentByEmail = FindStudentByEmail;

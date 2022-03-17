"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindStudentByEmail = exports.FindProfessorsByDiscipline = exports.FindProfessorByLogin = void 0;
const firestore_1 = require("firebase/firestore");
const Firebase_1 = require("../../database/Firebase");
const FindProfessorByLogin = async (login) => {
    try {
        const docSnap = (await (0, firestore_1.getDoc)((0, firestore_1.doc)(Firebase_1.UsersDatabase, "Professores", login)));
        return docSnap;
    }
    catch (e) {
        throw new Error("There was an unknown error");
    }
};
exports.FindProfessorByLogin = FindProfessorByLogin;
const FindProfessorsByDiscipline = async (discipline) => {
    try {
        const queryRef = (0, firestore_1.query)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Professores"), (0, firestore_1.where)("Discipline", "==", discipline));
        const querySnap = (await (0, firestore_1.getDocs)(queryRef));
        const foundProfessors = [];
        querySnap.forEach((snap) => foundProfessors.push(snap.data()));
        return foundProfessors;
    }
    catch (e) {
        throw new Error("There was an unknown error");
    }
};
exports.FindProfessorsByDiscipline = FindProfessorsByDiscipline;
const FindStudentByEmail = async (email) => {
    const docRef = (0, firestore_1.collection)(Firebase_1.UsersDatabase, "Professores");
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

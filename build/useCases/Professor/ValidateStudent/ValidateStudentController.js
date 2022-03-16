"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckProfessorValidity = void 0;
const firestore_1 = require("firebase/firestore");
const Firebase_1 = require("../../../database/Firebase");
const CheckProfessorValidity = async (_id = "####", _class) => {
    const ProfessorQuery = (0, firestore_1.query)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Professores"), (0, firestore_1.where)("_id", "==", _id));
    const ProfessorsSnapshot = (await (0, firestore_1.getDocs)(ProfessorQuery));
    let validateStatus = false;
    ProfessorsSnapshot.forEach((snap) => {
        validateStatus = snap.exists() && snap.data().Classes.includes(_class);
    });
    return validateStatus;
};
exports.CheckProfessorValidity = CheckProfessorValidity;

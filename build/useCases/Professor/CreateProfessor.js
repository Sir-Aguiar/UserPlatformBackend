"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessor = void 0;
const firestore_1 = require("firebase/firestore");
const Firebase_1 = require("../../database/Firebase");
const Professors_1 = require("../../entities/Professors");
const GetProfessors_1 = require("./GetProfessors");
const CreateProfessor = async (props) => {
    const professor = new Professors_1.Professor(props);
    if ((await (0, GetProfessors_1.FindProfessorByLogin)(props.login)).exists()) {
        throw new Error("Username already taken");
    }
    const InsertProfessorInClasses = async (name, _id, discipline, _classes) => {
        _classes.forEach((_class) => {
            const docRef = (0, firestore_1.doc)(Firebase_1.UsersDatabase, "Turmas", _class);
            (0, firestore_1.updateDoc)(docRef, {
                Professores: (0, firestore_1.arrayUnion)({
                    _id: _id || "#",
                    Name: name,
                    Discipline: discipline
                }),
            }).then(() => {
                console.log("Inserido em ", _class);
            });
        });
    };
    const InsertProfessorInDataBase = async () => {
        try {
            const insertedDoc = await (0, firestore_1.setDoc)((0, firestore_1.doc)((0, firestore_1.collection)(Firebase_1.UsersDatabase, "Professores"), professor.login), {
                _id: professor.id,
                Name: professor.name,
                Password: professor.password,
                Email: professor.email,
                Classes: professor._classes,
                Username: professor.login,
                Discipline: professor.discipline,
            });
            await InsertProfessorInClasses(professor.name, professor.id, professor.discipline, professor._classes);
            return insertedDoc;
        }
        catch (e) {
            throw new Error("Insuficient information");
        }
    };
    return await InsertProfessorInDataBase();
};
exports.CreateProfessor = CreateProfessor;

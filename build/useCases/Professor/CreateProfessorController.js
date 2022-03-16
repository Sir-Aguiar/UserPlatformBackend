"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessorRequest = void 0;
const CreateProfessor_1 = require("./CreateProfessor");
const CreateProfessorRequest = (req, res) => {
    const { name, login, password, _classes, discipline, email } = req.body;
    (0, CreateProfessor_1.CreateProfessor)({ name, login, password, _classes, discipline, email })
        .then((response) => {
        return res.status(201).json({
            message: "Professor adicionado com sucesso",
        });
    })
        .catch((e) => {
        return res.status(400).json({
            errorMessage: e.message,
            errorName: e.name,
            fullyError: e,
        });
    });
};
exports.CreateProfessorRequest = CreateProfessorRequest;

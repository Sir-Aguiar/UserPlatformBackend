"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentRequest = void 0;
const CreateStudent_1 = require("./CreateStudent");
const CreateStudentRequest = (req, res) => {
    const { name, password, email, _class, login } = req.body;
    (0, CreateStudent_1.CreateStudent)({ name, password, email, _class, login })
        .then((resposta) => {
        return res.status(201).json({
            message: "Usuário criado com sucesso"
        });
    })
        .catch((e) => {
        return res.status(400).json({
            error: e.message
        });
    });
};
exports.CreateStudentRequest = CreateStudentRequest;

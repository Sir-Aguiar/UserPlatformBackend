"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentRequest = void 0;
const CreateStudent_1 = require("./CreateStudent");
const CreateStudentRequest = (req, res) => {
    const { name, password, email, _class, login } = req.body;
    (0, CreateStudent_1.CreateStudent)({ name, password, _class, email, login })
        .then((response) => {
        res.status(201);
        res.json({
            message: "Novo estudante adicionado com sucesso",
        });
        return;
    })
        .catch((e) => {
        return res.status(400).json({
            message: e.message,
            error: e.name,
        });
    });
};
exports.CreateStudentRequest = CreateStudentRequest;

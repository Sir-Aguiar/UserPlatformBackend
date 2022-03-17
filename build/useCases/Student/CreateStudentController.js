"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentRequest = void 0;
const CreateStudent_1 = require("./CreateStudent");
const CreateStudentRequest = (req, res) => {
    const { name, password, email, _class, login } = req.body;
    (0, CreateStudent_1.CreateStudent)({ name, password, email, _class, login })
        .then((resposta) => {
        return res.status(201).send();
    })
        .catch((e) => {
        if (e.message == "Username already taken") {
            return res.status(401).send();
        }
        res.status(400).send();
    });
};
exports.CreateStudentRequest = CreateStudentRequest;

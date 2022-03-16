"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudentsByNameRequest = exports.GetStudentsByClassRequest = exports.GetStudentsByLoginRequest = void 0;
const GetStudents_1 = require("./GetStudents");
async function GetStudentsByLoginRequest(req, res) {
    const { login } = req.params;
    const foundStudent = await (0, GetStudents_1.FindStudentByLogin)(login);
    if (foundStudent.exists()) {
        res.status(200);
        return res.json({ studentInfos: foundStudent.data() });
    }
    res.status(404);
    return res.send();
}
exports.GetStudentsByLoginRequest = GetStudentsByLoginRequest;
async function GetStudentsByClassRequest(req, res) {
    const { _class } = req.params;
    const foundStudents = await (0, GetStudents_1.FindStudentsByClass)(_class);
    res.json({ found: foundStudents });
}
exports.GetStudentsByClassRequest = GetStudentsByClassRequest;
async function GetStudentsByNameRequest(req, res) {
    const { name } = req.params;
    const foundStudents = await (0, GetStudents_1.FindStudentsByName)(name);
    res.json({ found: foundStudents });
}
exports.GetStudentsByNameRequest = GetStudentsByNameRequest;

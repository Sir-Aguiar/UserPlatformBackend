"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateStudentRequest = exports.GetStudentsToValidateRequest = void 0;
const ValidateStudentController_1 = require("./ValidateStudentController");
const VallidateStudent_1 = require("./VallidateStudent");
const GetStudentsToValidateRequest = async (req, res) => {
    const { _class } = req.params;
    const { professor_id } = req.headers;
    if (await (0, ValidateStudentController_1.CheckProfessorValidity)(professor_id, _class)) {
        (0, VallidateStudent_1.getStudentsToValidate)(_class)
            .then((response) => {
            return res.status(200).json({
                students: response,
            });
        })
            .catch((e) => {
            return res.status(400).json({
                Error: "Some error ocurred",
            });
        });
    }
    else {
        res.status(404).json({
            Error: "Invalid user-agent header, try a valid professor _id",
        });
    }
};
exports.GetStudentsToValidateRequest = GetStudentsToValidateRequest;
const ValidateStudentRequest = async (req, res) => {
    const { professor_id } = req.headers;
    const { studentLogin, validateOption, _class } = req.body;
    if (await (0, ValidateStudentController_1.CheckProfessorValidity)(professor_id, _class)) {
        (0, VallidateStudent_1.ValidateStudent)(studentLogin, validateOption)
            .then((response) => {
            return res.status(200).json({
                message: "Status changed successfully",
            });
        })
            .catch((e) => {
            return res.status(400).json({
                error: e,
            });
        });
    }
    else {
        res.status(404).json({
            Error: "Invalid professor id, try a valid one",
        });
    }
};
exports.ValidateStudentRequest = ValidateStudentRequest;

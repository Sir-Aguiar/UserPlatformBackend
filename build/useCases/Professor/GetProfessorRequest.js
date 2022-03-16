"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfessorsByDisciplineRequest = exports.GetProfessorByLoginRequest = void 0;
const GetProfessors_1 = require("./GetProfessors");
const GetProfessorByLoginRequest = async (req, res) => {
    const { login } = req.params;
    (0, GetProfessors_1.FindProfessorByLogin)(login)
        .then((response) => {
        if (response.exists()) {
            return res.status(200).json({
                professor: response.data(),
            });
        }
        else {
            return res.status(404).send();
        }
    })
        .catch((e) => {
        return res.status(400).json({
            message: e,
        });
    });
};
exports.GetProfessorByLoginRequest = GetProfessorByLoginRequest;
const GetProfessorsByDisciplineRequest = async (req, res) => {
    const { discipline } = req.params;
    (0, GetProfessors_1.FindProfessorsByDiscipline)(discipline)
        .then((response) => {
        if (response.length > 0) {
            return res.status(200).json({
                professors: response,
            });
        }
        else {
            return res.status(404).send();
        }
    })
        .catch((e) => {
        return res.status(400).json({
            message: e,
        });
    });
};
exports.GetProfessorsByDisciplineRequest = GetProfessorsByDisciplineRequest;

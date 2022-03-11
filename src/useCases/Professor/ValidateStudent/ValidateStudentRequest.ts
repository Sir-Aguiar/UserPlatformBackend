import { Request, Response } from "express";
import { CheckProfessorBy_id } from "../GetProfessors";
import { getStudentsToValidate, ValidateStudent } from "./VallidateStudent";

const GetStudentsToValidateRequest = async (req: Request, res: Response) => {
  const { _class } = req.params;
  const { professor_id } = req.headers;

  if (await CheckProfessorBy_id(professor_id || "#####")) {
    getStudentsToValidate(_class)
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
  } else {
    res.status(404).json({
      Error: "Invalid user-agent header, try a valid professor _id",
    });
  }
};
const ValidateStudentRequest = async (req: Request, res: Response) => {
  const { professor_id } = req.headers;
  const { studentLogin, validateOption } = req.body;

  if (await CheckProfessorBy_id(professor_id || "#####")) {
    ValidateStudent(studentLogin, validateOption)
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
  } else {
    res.status(404).json({
      Error: "Invalid professor id, try a valid one",
    });
  }
};
export { GetStudentsToValidateRequest, ValidateStudentRequest };

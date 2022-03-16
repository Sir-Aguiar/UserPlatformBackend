import { Request, response, Response } from "express";
import { FindProfessorByLogin, FindProfessorsByDiscipline } from "./GetProfessors";

const GetProfessorByLoginRequest = async (req: Request, res: Response) => {
  const { login } = req.params;
  FindProfessorByLogin(login)
    .then((response) => {
      if (response.exists()) {
        return res.status(200).json({
          professor: response.data(),
        });
      } else {
        return res.status(404).send();
      }
    })
    .catch((e) => {
      return res.status(400).json({
        message: e,
      });
    });
};
const GetProfessorsByDisciplineRequest = async (req: Request, res: Response) => {
  const { discipline } = req.params;
  FindProfessorsByDiscipline(discipline)
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          professors: response,
        });
      } else {
        return res.status(404).send();
      }
    })
    .catch((e) => {
      return res.status(400).json({
        message: e,
      });
    });
};
export { GetProfessorByLoginRequest, GetProfessorsByDisciplineRequest };

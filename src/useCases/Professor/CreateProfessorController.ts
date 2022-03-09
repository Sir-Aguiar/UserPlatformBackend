import { Request, Response } from "express";
import { CreateProfessor } from "./CreateProfessor";

const CreateProfessorRequest = (req: Request, res: Response) => {
  const { name, login, password, _classes, discipline, email } = req.body;
  CreateProfessor({ name, login, password, _classes, discipline, email })
    .then((response) => {
      return res.status(201).json({
        message: "Professor adicionado com sucesso",
      });
    })
    .catch((e: Error) => {
      return res.status(400).json({
        errorMessage: e.message,
        errorName: e.name,
        fullyError: e,
      });
    });
};
export { CreateProfessorRequest };

import { Request, Response } from "express";
import { CreateStudent } from "./CreateStudent";
const CreateStudentRequest = (req: Request, res: Response) => {
  const { name, password, email, _class, login } = req.body;
  CreateStudent({ name, password, email, _class, login })
    .then((resposta) => {
      return res.status(201).json({
        message: "Usuário criado com sucesso"
      });
    })
    .catch((e) => {
      return res.status(400).json({
        error: e.message
      })
    });
};
export { CreateStudentRequest };

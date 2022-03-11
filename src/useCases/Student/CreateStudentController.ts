import { Request, Response } from "express";
import { CreateStudent } from "./CreateStudent";

const CreateStudentRequest = (req: Request, res: Response) => {
  const { name, password, email, _class, login } = req.body;
  CreateStudent({ name, password, _class, email, login })
    .then((response) => {
      res.status(201);
      res.json({
        message: "Novo estudante adicionado com sucesso",
      });
      return;
    })
    .catch((e: Error) => {
      return res.status(400).json({
        message: e.message,
        error: e.name,
      });
    });
}
export { CreateStudentRequest };

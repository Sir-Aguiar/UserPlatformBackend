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
      if (e.message == "Username already taken") {
        return res.status(401).send()
      }
      res.status(400).send()
    });
}
export { CreateStudentRequest };

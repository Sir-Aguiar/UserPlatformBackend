import { Request, Response } from "express";
import { FindStudentByLogin, FindStudentsByClass, FindStudentsByName } from "./GetStudents";

async function GetStudentsByLoginRequest(req: Request, res: Response) {
  const { login } = req.params;
  const foundStudent = await FindStudentByLogin(login);
  if (foundStudent.exists()) {
    res.status(200);
    return res.json({ studentInfos: foundStudent.data() });
  }
  res.status(404);
  return res.send();
}
async function GetStudentsByClassRequest(req: Request, res: Response) {
  const { _class } = req.params;
  const foundStudents = await FindStudentsByClass(_class);
  res.json({ found: foundStudents });
}
async function GetStudentsByNameRequest(req: Request, res: Response) {
  const { name } = req.params;
  const foundStudents = await FindStudentsByName(name);
  res.json({ found: foundStudents });
}
export {
  GetStudentsByLoginRequest,
  GetStudentsByClassRequest,
  GetStudentsByNameRequest,
};

import express from "express";
import { CreateProfessorRequest } from "./useCases/Professor/CreateProfessorController";
import { CreateStudentRequest } from "./useCases/Student/CreateStudentController";
import {
  GetStudentsByClassRequest,
  GetStudentsByLoginRequest,
  GetStudentsByNameRequest,
} from "./useCases/Student/GetStudentsController";
const app = express();
app.use(express.json());
app.listen(process.env.PORT || 3333, () =>
  console.log(`Servidor iniciado em ${process.env.PORT || 3333}`)
);
app.post("/new-student", CreateStudentRequest);
app.post("/new-professor", CreateProfessorRequest);
app.get("/stdlogin/:login", GetStudentsByLoginRequest);
app.get("/stdname/:name", GetStudentsByNameRequest);
app.get("/stdclass/:_class", GetStudentsByClassRequest);

import express from "express";
import cors from "cors";
import { CreateProfessorRequest } from "./useCases/Professor/CreateProfessorController";
import { GetProfessorByLoginRequest, GetProfessorsByDisciplineRequest } from "./useCases/Professor/GetProfessorRequest";
import {
  GetStudentsToValidateRequest,
  ValidateStudentRequest,
} from "./useCases/Professor/ValidateStudent/ValidateStudentRequest";
import { CreateStudentRequest } from "./useCases/Student/CreateStudentController";
import {
  GetStudentsByClassRequest,
  GetStudentsByLoginRequest,
  GetStudentsByNameRequest,
} from "./useCases/Student/GetStudentsController";
import { GetClassesRequest } from "./useCases/GetClassesRequest";
const app = express();
app.use(
  cors({
    origin: ["https://students-platform-06.herokuapp.com/", "https://students-platform.vercel.app/"],
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(express.json());
app.listen(process.env.PORT || 3333, () => console.log(`Servidor iniciado em ${process.env.PORT || 3333}`));
app.post("/new-student", CreateStudentRequest);
app.post("/new-professor", CreateProfessorRequest);
app.get("/stdlogin/:login", GetStudentsByLoginRequest);
app.get("/stdname/:name", GetStudentsByNameRequest);
app.get("/stdclass/:_class", GetStudentsByClassRequest);
app.get("/pfrlogin/:login", GetProfessorByLoginRequest);
app.get("/prfdiscipline/:discipline", GetProfessorsByDisciplineRequest);
app.get("/stdvalidate/:_class", GetStudentsToValidateRequest);
app.get("/getclasses", GetClassesRequest);
app.put("/validatestd", ValidateStudentRequest);

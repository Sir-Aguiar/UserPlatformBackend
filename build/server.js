"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const GetProfessorRequest_1 = require("./useCases/Professor/GetProfessorRequest");
const ValidateStudentRequest_1 = require("./useCases/Professor/ValidateStudent/ValidateStudentRequest");
const CreateStudentController_1 = require("./useCases/Student/CreateStudentController");
const GetStudentsController_1 = require("./useCases/Student/GetStudentsController");
const GetClassesRequest_1 = require("./useCases/GetClassesRequest");
const LoginRequest_1 = require("./useCases/Login/LoginRequest");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT"],
}));
app.use(express_1.default.json());
app.listen(process.env.PORT || 3333, () => console.log(`Servidor iniciado em ${process.env.PORT || 3333}`));
app.post("/new-student", CreateStudentController_1.CreateStudentRequest);
/* app.post("/new-professor", CreateProfessorRequest); */
app.get("/stdlogin/:login", GetStudentsController_1.GetStudentsByLoginRequest);
app.get("/stdname/:name", GetStudentsController_1.GetStudentsByNameRequest);
app.get("/stdclass/:_class", GetStudentsController_1.GetStudentsByClassRequest);
app.get("/pfrlogin/:login", GetProfessorRequest_1.GetProfessorByLoginRequest);
app.get("/prfdiscipline/:discipline", GetProfessorRequest_1.GetProfessorsByDisciplineRequest);
app.get("/stdvalidate/:_class", ValidateStudentRequest_1.GetStudentsToValidateRequest);
app.put("/validatestd", ValidateStudentRequest_1.ValidateStudentRequest);
app.get("/getclasses", GetClassesRequest_1.GetClassesRequest);
app.get("/login/:email/:password", LoginRequest_1.LoginStudentRequest);

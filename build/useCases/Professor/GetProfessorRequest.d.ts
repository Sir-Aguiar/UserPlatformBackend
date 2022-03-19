import { Request, Response } from "express";
declare const GetProfessorByLoginRequest: (req: Request, res: Response) => Promise<void>;
declare const GetProfessorsByDisciplineRequest: (req: Request, res: Response) => Promise<void>;
export { GetProfessorByLoginRequest, GetProfessorsByDisciplineRequest };

import { Request, Response } from "express";
declare const GetStudentsToValidateRequest: (req: Request, res: Response) => Promise<void>;
declare const ValidateStudentRequest: (req: Request, res: Response) => Promise<void>;
export { GetStudentsToValidateRequest, ValidateStudentRequest };

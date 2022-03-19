import { Request, Response } from "express";
declare const LoginStudentRequest: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { LoginStudentRequest };

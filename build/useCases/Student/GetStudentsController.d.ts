import { Request, Response } from "express";
declare function GetStudentsByLoginRequest(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function GetStudentsByClassRequest(req: Request, res: Response): Promise<void>;
declare function GetStudentsByNameRequest(req: Request, res: Response): Promise<void>;
export { GetStudentsByLoginRequest, GetStudentsByClassRequest, GetStudentsByNameRequest, };

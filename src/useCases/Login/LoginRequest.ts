import { Request, Response } from "express";
import { SingInUser } from "./LoginUseCase";

const LoginStudentRequest = async (req: Request, res: Response) => {
  const { email, password } = req.params;
  const myResponse = await SingInUser(email, password);
  if (myResponse.signal) {
    return res.status(200).json({
      userInfos: myResponse.user,
      validated: myResponse.user?.emailVerified,
    });
  }
  return res.status(400).json({
    error: myResponse.error,
    message: myResponse.message,
  });
};
export { LoginStudentRequest };

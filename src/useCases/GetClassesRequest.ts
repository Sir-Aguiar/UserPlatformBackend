import { Request, Response } from "express";
import { collection, getDocs, where } from "firebase/firestore";
import { UsersDatabase } from "../database/Firebase";

export const GetClassesRequest = async (req: Request, res: Response) => {
  GetClasses()
    .then((result) => {
      res.status(200).json({
        classes: result,
      });
    })
    .catch((e) => {
      res.status(500).json({
        errorMessage: e.message,
        error: e,
      });
    });
};
const GetClasses = async () => {
  try {
    const colRef = collection(UsersDatabase, "Turmas");
    const docs = await getDocs(colRef);
    const classes: string[] = [];
    docs.forEach((doc) => {
      if (doc.id != "ZZ#") classes.push(doc.id);
    });
    return classes;
  } catch (e) {
    throw new Error("Something went wrong with our servers");
  }
};

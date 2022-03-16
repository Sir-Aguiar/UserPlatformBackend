import { Request, Response } from "express";
import { collection, getDocs, where } from "firebase/firestore";
import { UsersDatabase } from "../database/Firebase";

export const GetClassesRequest = async (req: Request, res: Response) => {
  res.status(200).json({
    classes: await GetClasses(),
  });
};
const GetClasses = async () => {
  const colRef = collection(UsersDatabase, "Turmas");
  const docs = await getDocs(colRef);
  const classes: string[] = [];
  docs.forEach((doc) => {
    if (doc.id != "ZZ#") classes.push(doc.id);
  });
  return classes;
};

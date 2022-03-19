declare type UserTypes = string|"Professor" | "Student";

declare type ParamsType = {
  email:string;
  password:string;
  usertype:UserTypes
}
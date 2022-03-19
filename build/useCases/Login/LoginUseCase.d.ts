import { User } from "firebase/auth";
interface LoginResponse {
    signal: boolean;
    user?: User;
    message?: any;
    error?: any;
}
declare const SingInUser: (useremail: string, userpassword: string) => Promise<LoginResponse>;
export { SingInUser };

import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";
import { UsersDatabase } from "../../database/Firebase";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";

const auth = getAuth();
interface LoginResponse {
  signal: boolean;
  user?: User;
  message?: any;
  error?: any;
}

//
const SingInUser = async (useremail: string, userpassword: string): Promise<LoginResponse> => {
  const singInSignal = signInWithEmailAndPassword(auth, useremail, userpassword)
    .then((res) => {
      return {
        signal: true,
        user: res.user,
      };
    })
    .catch((e) => {
      return {
        signal: false,
        message: e.message,
        error: e,
      };
    });
  return singInSignal;
};
export { SingInUser };

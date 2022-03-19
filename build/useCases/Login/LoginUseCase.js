"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingInUser = void 0;
const auth_1 = require("firebase/auth");
const auth = (0, auth_1.getAuth)();
//
const SingInUser = async (useremail, userpassword) => {
    const singInSignal = (0, auth_1.signInWithEmailAndPassword)(auth, useremail, userpassword)
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
exports.SingInUser = SingInUser;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginStudentRequest = void 0;
const LoginUseCase_1 = require("./LoginUseCase");
const LoginStudentRequest = async (req, res) => {
    const { email, password } = req.params;
    const myResponse = await (0, LoginUseCase_1.SingInUser)(email, password);
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
exports.LoginStudentRequest = LoginStudentRequest;

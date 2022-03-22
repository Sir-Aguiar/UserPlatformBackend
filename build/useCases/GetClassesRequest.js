"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassesRequest = void 0;
const firestore_1 = require("firebase/firestore");
const Firebase_1 = require("../database/Firebase");
const GetClassesRequest = async (req, res) => {
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
exports.GetClassesRequest = GetClassesRequest;
const GetClasses = async () => {
    try {
        const colRef = (0, firestore_1.collection)(Firebase_1.UsersDatabase, "Turmas");
        const docs = await (0, firestore_1.getDocs)(colRef);
        const classes = [];
        docs.forEach((doc) => {
            if (doc.id != "ZZ#")
                classes.push(doc.id);
        });
        return classes;
    }
    catch (e) {
        throw new Error("Something went wrong with our servers");
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassesRequest = void 0;
const firestore_1 = require("firebase/firestore");
const Firebase_1 = require("../database/Firebase");
const GetClassesRequest = async (req, res) => {
    res.status(200).json({
        classes: await GetClasses(),
    });
};
exports.GetClassesRequest = GetClassesRequest;
const GetClasses = async () => {
    const colRef = (0, firestore_1.collection)(Firebase_1.UsersDatabase, "Turmas");
    const docs = await (0, firestore_1.getDocs)(colRef);
    const classes = [];
    docs.forEach((doc) => {
        if (doc.id != "ZZ#")
            classes.push(doc.id);
    });
    return classes;
};

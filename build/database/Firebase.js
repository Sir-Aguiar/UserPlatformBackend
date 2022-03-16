"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDatabase = exports.FirebaseApp = void 0;
require("dotenv/config");
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const UsersDataBaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
};
const FirebaseApp = (0, app_1.initializeApp)(UsersDataBaseConfig);
exports.FirebaseApp = FirebaseApp;
const UsersDatabase = (0, firestore_1.getFirestore)(FirebaseApp);
exports.UsersDatabase = UsersDatabase;

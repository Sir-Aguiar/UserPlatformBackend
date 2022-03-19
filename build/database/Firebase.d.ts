import "dotenv/config";
declare const FirebaseApp: import("@firebase/app").FirebaseApp;
declare const UsersDatabase: import("@firebase/firestore").Firestore;
export { FirebaseApp, UsersDatabase };

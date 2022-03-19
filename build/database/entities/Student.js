"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentConverter = void 0;
class StudentModel {
    constructor(props) {
        this.Class = props.Class;
        this._id = props._id;
        this.Password = props.Password;
        this.Email = props.Email;
        this.Name = props.Name;
        this.Status = props.Status;
        this.Username = props.Username;
    }
    AA() {
    }
}
const studentConverter = {
    toFirestore: (student) => {
        return {
            Class: student.Class,
            Email: student.Email,
            Name: student.Name,
            Password: student.Password,
            Status: student.Status,
            Username: student.Status,
            _id: student._id,
        };
    },
    fromFirestore: (snapshot, options) => {
        const formatedData = snapshot.data(options);
        const formatedObject = new StudentModel(formatedData);
        return formatedObject;
    },
};
exports.studentConverter = studentConverter;

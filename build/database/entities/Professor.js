"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorsModel = exports.professorsConverter = void 0;
class ProfessorsModel {
    constructor(props) {
        this._id = props._id;
        this.Email = props.Email;
        this.Name = props.Name;
        this.Classes = props.Classes;
        this.Discipline = props.Discipline;
        this.Username = props.Username;
        this.Password = props.Password;
    }
    test() {
        console.log(this.Name);
    }
}
exports.ProfessorsModel = ProfessorsModel;
const professorsConverter = {
    toFirestore: (professor) => {
        return {
            _id: professor._id,
            Email: professor.Email,
            Name: professor.Name,
            Classes: professor.Classes,
            Discipline: professor.Discipline,
            Username: professor.Username,
            Password: professor.Password,
        };
    },
    fromFirestore: (snapshot, options) => {
        const formatedObject = new ProfessorsModel(snapshot.data(options));
        return formatedObject;
    },
};
exports.professorsConverter = professorsConverter;

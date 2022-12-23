
const students = require("../services/students");

module.exports = {

    createNewStudents: async (req, res) => {
        try {
            const student = await students.createStudent(req);

            res.send(student)
        } catch (error) {
            console.log(error);
        }
    },

    studentList: async (req, res) => {
        const studentlist = await students.studentList(req);

        res.send(studentlist);
    },

    search: async (req, res) => {
        try {
            const studentList = await students.search(req);

            res.send(studentList);
        } catch (error) {
            console.log(error);
        }
    }
}

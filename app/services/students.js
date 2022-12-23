const utility = require('../helpers/utility');
const AppStudent = require('../models/students')

module.exports = {
    createStudent: async (req) => {
        const name = req.body.name;

        const students = await AppStudent.find({});

        console.log(name, students)
        const newStudent = new AppStudent({
            token: utility.getToken("ST"),
            name: name,
            position: students.length + 1
        });

        newStudent.save();

        return newStudent;
    },
    studentList: async (req) => {
        const limit = 5;
        let page = req.params.page;
        page = parseInt(page) - 1;
        const startIndex = page * limit;
        const students = await AppStudent.find({}).skip(startIndex).limit(limit);

        return students;
    },

    search: async (req) => {
        try {
            const query = req.query.name;
            console.log(req.query);
            let studentList = await AppStudent.find({
                name: { $regex: query, $options: 'i' }
            });
            console.log(studentList)
            return studentList;
        } catch (error) {

        }
    }
}
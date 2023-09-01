const mongoose = require("mongoose");

const field = {
    "token": {
        type: String,
    },
    "name": {
        type: String,
    },
    "position":{
        type: Number
    }
}

const studentSchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model("Student", studentSchema);
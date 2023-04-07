const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

    first_name: {

        type: String,
        required: true

    },
    last_name: {

        type: String,
        required: true

    },
    age: {

        type: Number,
        required: true
    },
    nic: {

        type: String,
        required: true

    },
    email: {

        type: String,
        required: true

    },
    telephone: {

        type: String,
        required: true

    },
    position: {

        type: String,
        required: true

    },
    file_path: {
        type: String

    },
    status: {

        type: String,
        required: true

    }


})

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const DoctorScema = new Schema({

    hospital: {

        type: String,
        required: true

    },
    doctor_category: {

        type: String,
        required: true

    },
    doctor_name: {

        type: String,
        required: true

    },
    doctor_email: {
        type: String,
        required: true
    }


})

const Doctor = mongoose.model("Doctor", DoctorScema);

module.exports = Doctor;
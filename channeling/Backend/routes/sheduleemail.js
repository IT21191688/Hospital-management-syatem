const cron = require('node-cron');
const express = require('express');
//const sendEmails = require('./sendEmails');
const nodemailer = require('nodemailer');
const Doctor = require('../models/doctor');
let Appoinment = require("../models/appoinment");
const router = express.Router();

cron.schedule('0 0 * * *', function () {
    console.log("Shedule Run");
    sheduledEmail();
});


//Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'medixoehealth',
        pass: 'boupdtqanzqxslcg'
    }
});


const sheduledEmail = async function () {

    const today = new Date();

    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();

    let md;
    let dd;


    if (m < 10) {

        md = "0" + m;

    }

    if (d < 10) {

        dd = "0" + d;

    }




    const modifiedDate = y + "-" + md + "-" + dd + "T00:00:00.000Z"

    const appoinments = await Appoinment.find();
    const doctors = await Doctor.find();

    for (const doc of doctors) {


        let success = 0;
        let unsuccess = 0;
        let pending = 0;
        let cancel = 0;

        for (const app of appoinments) {

            if (app.doctor_name === doc.doctor_name) {

                const AY = app.date.getFullYear();
                const AM = app.date.getMonth();
                const AD = app.date.getDate();

                let AMD, ADD;

                if (AM < 10) {

                    AMD = "0" + AM;

                }

                if (d < 10) {

                    ADD = "0" + AD;

                }

                const modifiedAppDate = AY + "-" + AMD + "-" + ADD + "T00:00:00.000Z";

                if (modifiedAppDate === modifiedDate) {

                    if (app.status === "success") {

                        success++;

                    }
                    else if (app.status === "unsucess") {

                        unsuccess++;

                    }
                    else if (app.status === "pending") {


                        pending++;

                    }
                    else {
                        cancel++;
                    }




                }




            }

        }



        const mailOptions = {
            from: 'medixoehealth@gmail.com',
            to: doc.doctor_email,
            subject: 'Appointment details',
            text: `Dear Doctor ${doc.doctor_name},\n\nToday You have Completed ${success} successfull appoinments.\n\n
            ${unsuccess} was unsuccess and also have ${pending} pending appoinments.\n
            ${cancel} Appoinments Canceled.\n\n\n


            You Have Earned ${success} * 2000 =${success * 2000}

            Thank You.\n

            (this is a system generated email no reply neded ${today}).`
        };


        //send mail
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }




}


module.exports = router;
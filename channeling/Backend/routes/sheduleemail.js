const cron = require('node-cron');
const express = require('express');
//const sendEmails = require('./sendEmails');
const nodemailer = require('nodemailer');
const Doctor = require('../models/doctor');
let Appoinment = require("../models/appoinment");
const router = express.Router();
const Chart = require('chart.js/auto');

//pdf generate 
const { createCanvas } = require('canvas');
const PDFDocument = require('pdfkit');
const fs = require('fs');






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

        var docName = doc.doctor_name;


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



        // create a new PDF document

        const document = new PDFDocument();




        // add some content to the PDF document
        document.fontSize(18).text('Doctor' + doc.doctor_name, { align: 'center' });
        document.moveDown();

        for (let i = 0; i < appoinments.length; i++) {
            const item = appoinments[i];

            if (appoinments[i].doctor_name === doc.doctor_name) {

                if (item.status === 'success') {
                    document.fontSize(12).fillColor('green').text(`${item.appNo}: ${item.first_name + " " + item.last_name}: ${item.status}`);
                    document.moveDown();
                } else if (item.status === 'unsucess') {
                    document.fontSize(12).fillColor('orange').text(`${item.appNo}: ${item.first_name + " " + item.last_name}:${item.status}`);
                    document.moveDown();
                } else if (item.status === 'pending') {
                    document.fontSize(12).fillColor('blue').text(`${item.appNo}: ${item.first_name + " " + item.last_name}:${item.status}`);
                    document.moveDown();
                } else {
                    document.fontSize(12).fillColor('red').text(`${item.appNo}: ${item.first_name + " " + item.last_name}:${item.status}`);
                    document.moveDown();
                }
            }
        }

        // construct the file name
        const fileName = `Reports/${docName}.pdf`;

        // save the PDF document to a file
        document.pipe(fs.createWriteStream(fileName));

        // end the PDF document
        document.end();



        const mailOptions = {
            from: 'medixoehealth@gmail.com',
            to: doc.doctor_email,
            subject: 'Appointment details',
            attachments: [
                {
                    filename: `${docName}.pdf`,
                    path: `Reports/${docName}.pdf`
                }
            ],

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
                console.log('Email sent: ' + info.response + doc.doctor_name);

            }
        });

    }
}



module.exports = router;
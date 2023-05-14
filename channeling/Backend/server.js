//create varables and import pacages
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cron = require('node-cron');

//import .env
require("dotenv").config();

//initialize port number
const PORT = process.env.PORT || 8050;

//use dependancies
app.use(cors());
//get json using bodyparser
app.use(bodyParser.json());

//connect mongo db options
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

const db = mongoose.connection;

//open connection
//normal funtion also can use
/*
db.once('open',()=>{

    console.log("Mongodb Connection Success");

})
*///



const appoinmentRouter = require("./routes/appoinments.js");
app.use("/appoinment", appoinmentRouter);

const sheduleEmail = require("./routes/sheduleemail.js");
app.use("/sheduleEmail", sheduleEmail);


const labAppoinmentRouter = require("./routes/labappoinments.js");
app.use("/Appoinment_slip", express.static("Appoinment_slip"));
app.use("/labappoinment", labAppoinmentRouter);

const doctorRouter = require("./routes/doctors.js");
app.use("/doctor", doctorRouter);

const sheduleUpdate = require("./routes/appoinmentAutoup.js");
app.use("/appinmentAutoup", sheduleUpdate);




app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})


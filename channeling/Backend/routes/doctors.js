const router = require("express").Router();

const { request } = require("express");
let Doctor = require("../models/doctor");
//import models student js

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path");




//read data
router.route("/readDoctor").get(function (req, res) {

    Doctor.find().then((Doctor) => {

        res.json(Doctor);

    }).catch(function (err) {

        console.log(err);

    })
})




//export module
module.exports = router;
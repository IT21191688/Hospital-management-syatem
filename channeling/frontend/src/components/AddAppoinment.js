import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../siteImages/medlogo.png";
import successimg from "../siteImages/modal-success.png";
import unsuccessimg from "../siteImages/model-unsuccess.png";
import docAppoinmentpgBack from "../siteImages/docAppoinmentpgBack.jpg";

export default function AddAppoinment() {

    const [doctor_category, setDoctorCategory] = useState("");
    const [doctor_name, setDoctorName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [appNo, setAppoinmentNo] = useState("")
    const [appTime, setTime] = useState("");
    const status = "pending";


    const navigate = useNavigate();




    //should pass event
    function btnClick(e) {


        const validate = validateForm();

        if (validate === true) {

            e.preventDefault();


            const formData = new FormData();

            formData.append('doctor_category', doctor_category);
            formData.append('doctor_name', doctor_name);
            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('age', age);
            formData.append('nic', nic);
            formData.append('email', email);
            formData.append('telephone', telephone);
            formData.append('status', status);
            formData.append('date', date);
            formData.append('appNo', appNo);
            formData.append('appTime', appTime);



            axios.post("http://localhost:8050/appoinment/addAppoinment", formData).then(function () {

                alert("Student Add");
                successModel();

            }).catch(function (err) {

                alert(err);
                unsuccessModel();

            })

        }


    }

    function AssignTime(e) {
        e.preventDefault();
        assignAppoinmentNo(date, doctor_name);

    }


    //dropdown details get
    const [chanelling, setChanneling] = useState([]);
    const [appoinmentDetails, setAppoinmentDetails] = useState([]);

    useEffect(function () {

        function getAppoinment() {
            axios.get("http://localhost:8050/doctor/readDoctor").then(function (res) {

                console.log(res.data);

                setChanneling(res.data);


            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getAppoinment();

        function getAppoinmentDetails() {
            axios.get("http://localhost:8050/appoinment/readAppoinment").then(function (res) {

                console.log(res.data);

                setAppoinmentDetails(res.data);


            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getAppoinmentDetails();

    }, [])


    function successModel() {

        const modelBtn = document.getElementById("model-btn")
        modelBtn.click();

    }

    function unsuccessModel() {

        const modelBtn = document.getElementById("model-btn-fail")
        modelBtn.click();

    }

    function assignAppoinmentNo(date, drName) {

        var i = 1;
        date = date + "T00:00:00.000Z"


        if (appoinmentDetails.length == 0) {

            var t;
            i = 1;
            t = "09: 00AM"
            setTime(t);
            setAppoinmentNo(i);



        }

        for (var j = 0; j <= appoinmentDetails.length; j++) {

            var appname = appoinmentDetails[j].doctor_name;
            var appdate = appoinmentDetails[j].date;



            if (drName === appname) {

                if (appdate === date) {
                    i = i + 1;

                }


            }
            if (i > 20) {
                alert("Can not Create Appoinment Today Please Try another Day")
            }

            var t;
            if (i === 1) {
                t = "06: 00AM"
                setTime(t);

            }
            else if (i === 2) {
                t = "06: 15AM"
                setTime(t);
            }
            else if (i === 3) {
                t = "06: 30AM"
                setTime(t);
            }
            else if (i === 4) {
                t = "06: 45AM"
                setTime(t);
            }
            else if (i === 5) {
                t = "07:00AM"
                setTime(t);
            }
            else if (i === 6) {
                t = "07:15AM"
                setTime(t);
            }
            else if (i === 7) {
                t = "07:15AM"
                setTime(t);
            }
            else if (i === 8) {
                t = "07:45AM"
                setTime(t);
            }
            else if (i === 9) {
                t = "08:00AM"
                setTime(t);
            }
            else if (i === 10) {
                t = "08:15AM"
                setTime(t);
            }
            else if (i === 10) {
                t = "04:00PM"
                setTime(t);
            }
            else if (i === 11) {
                t = "04:15PM"
                setTime(t);
            }
            else if (i === 12) {
                t = "04:30PM"
                setTime(t);
            }
            else if (i === 13) {
                t = "04: 45PM"
                setTime(t);
            }
            else if (i === 14) {
                t = "05:00PM"
                setTime(t);
            }
            else if (i === 15) {
                t = "05:15PM"
                setTime(t);
            }
            else if (i === 16) {
                t = "05:30PM"
                setTime(t);
            }
            else if (i === 17) {
                t = "05:45PM"
                setTime(t);
            }
            else if (i === 18) {
                t = "06:00PM"
                setTime(t);
            }
            else if (i === 19) {
                t = "06:15PM"
                setTime(t);
            }
            else if (i === 20) {
                t = "08:15PM"
                setTime(t);
            }
            else {
                alert("No Appoinments today")
            }

            setAppoinmentNo(i);


        }





    }

    function validateForm() {

        let fname = document.forms["Addform"]["fname"].value;
        if (fname === "") {
            alert("first Name must be filled out");
            return false;
        }

        let lname = document.forms["Addform"]["lname"].value;
        if (lname === "") {
            alert("Last Name must be filled out");
            return false;
        }

        let Lage = document.forms["Addform"]["age"].value;
        if (Lage === "") {
            alert("age must be filled out");
            return false;
        }

        let Lnic = document.forms["Addform"]["nic"].value;
        if (Lnic === "") {
            alert("nic must be filled out");
            return false;
        }

        let Lemail = document.forms["Addform"]["email"].value;
        if (Lemail === "") {
            alert("email must be filled out");
            return false;
        }

        let Ldate = document.forms["Addform"]["date"].value;
        if (Ldate === "") {
            alert("date must be filled out");
            return false;
        }

        let LAppNo = document.forms["Addform"]["appoinmentNo"].value;
        if (LAppNo === "") {
            alert("Appoinment No must be filled out");
            return false;
        }

        return true;

    }


    return (

        <div>
            <section id="hero" class="d-flex align-items-center " style={{
                backgroundImage: `url( ${docAppoinmentpgBack})`,
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                backgroundSize: 'cover',
                position: 'center',
                maxWidth: '100%'

            }}>

                <div>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <img className="row" src={logo} alt="logo" style={{ width: "100px" }} />
                                    <h5 class="modal-title mt-4 pr-5" id="exampleModalLongTitle"><b>Appoinment Success</b></h5>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="rounded border border-success pb-2 pt-2">
                                        <h5 className="text-primary">Comfirmation E-mail send<br />With Details</h5>
                                        <h4 className="text-success">Please Check Your Email</h4>
                                        <img src={successimg} style={{ width: "50px" }} />
                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-success btn-lg btn-block" onClick={() => navigate("/appoinmentHome")} data-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div class="modal fade" id="exampleModalCenterFail" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <img className="row" src={logo} alt="logo" style={{ width: "100px" }} />
                                    <h5 class="modal-title mt-4 pr-5" id="exampleModalLongTitle"><b>Appoinment Unsuccess</b></h5>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="rounded border border-success pb-2 pt-2">
                                        <h5 className="text-primary">Please Try again With<br />Correct Details</h5>
                                        <img src={unsuccessimg} style={{ width: "50px" }} />
                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-success btn-lg btn-block" onClick={() => navigate("/appoinmentHome")} data-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button type="button" id="model-btn" data-toggle="modal" data-target="#exampleModalCenter"></button>
                <button type="button" id="model-btn-fail" data-toggle="modal" data-target="#exampleModalCenterFail"></button>


                <form name="Addform" method="post" encType="multipart/form-data" className="container was-validated" style={{ backgroundColor: "#bbbdbb", borderRadius: '10px', opacity: '0.9' }}>
                    <br />

                    <h3 className="text-dark"><b>Make A Doctor Appoinments</b></h3>

                    <div class="row">
                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Specialization</b></label>
                            <select name="specialization" className="form-control" onChange={e => setDoctorCategory(e.target.value)} required>
                                {chanelling.map(item => (
                                    <option key={item.doctor_category} value={item.doctor_category}>{item.doctor_category}</option>
                                ))}
                            </select>
                        </div ><br />


                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Doctor</b></label>
                            <select className="form-control" onChange={e => setDoctorName(e.target.value)} required>
                                {chanelling.map(item => (
                                    <option key={item.doctor_name} value={item.doctor_name}>{item.doctor_name}</option>
                                ))}
                            </select>
                        </div><br />
                    </div>

                    <div class="row">

                        <div className="form-group form-group col-md-6 mt-3 mt-md-0 ">
                            <label for="name"><b>First Name</b></label>
                            <input name="fname" type="text" className="form-control is-valid" id="firstName" placeholder="First Name" onChange={function (e) { setFirstName(e.target.value); }} required />
                        </div><br />
                        <div className="form-group form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Last Name</b></label>
                            <input name="lname" type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={function (e) { setLastName(e.target.value); }} required />
                        </div><br />
                    </div>

                    <div class="row">
                        <div className="form-group form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Age</b></label>
                            <input name="age" type="number" className="form-control is-valid" id="age" placeholder="age" onChange={function (e) { setAge(e.target.value); }} required />
                        </div><br />
                        <div className="form-group form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>NIC</b></label>
                            <input name="nic" type="text" className="form-control" id="nic" placeholder="NIC" onChange={function (e) { setNic(e.target.value); }} required />
                        </div><br />
                    </div>

                    <div class="row">
                        <div className="form-group form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>E-mail</b></label>
                            <input name="email" type="email" className="form-control" id="email" placeholder="E-mail" onChange={function (e) { setEmail(e.target.value); }} required />
                        </div><br />
                        <div className="form-group form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Telephone</b></label>
                            <input name="telephone" type="text" className="form-control" id="telephone" placeholder="07XXXXXXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={function (e) { setTelephone(e.target.value); }} required />
                        </div><br />
                    </div>
                    <div class="row">
                        <div className="form-group col-md-4 mt-3 mt-md-0">
                            <label for="name"><b>date</b></label>
                            <input name="date" type="date" className="form-control" id="date" onChange={function (e) { setDate(e.target.value); }} required />
                        </div><br />
                        <div className="form-group form-group col-md-4 mt-3 mt-md-0">
                            <label for="name"><b>Appoinment No</b></label>
                            <input name="appoinmentNo" type="text" className="form-control" id="telephone" value={appNo} onChange={function (e) { setTelephone(e.target.value); }} required disabled />
                        </div><br />
                        <div className="form-group col-md-4 mt-3 mt-md-0">
                            <label for="name"><b>Generate Time And Appoinment No</b></label>
                            <button type="button" class="btn btn-outline-primary" onClick={AssignTime}>Generate Appoinment No</button>
                        </div>
                    </div >

                    <div class="row d-flex justify-content-center">
                        <button type="submit" className="btn btn-danger col-md-3 mt-0 mt-md-0 mr-5 " onClick={() => navigate("/appoinment")}>Cancel</button>
                        <button type="submit" className="btn col-md-3 mt-0 mt-md-0 " style={{ background: "#4A75D3" }} onClick={btnClick}>Submit</button>

                    </div><br />
                </form ><br /><br />

            </section>
        </div >

    );
}

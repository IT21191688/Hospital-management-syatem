import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddLabAppoinment() {


    const navigate = useNavigate();

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [file_path, setImage] = useState("");
    const [appNo, setAppoinmentNo] = useState("")
    const [appTime, setTime] = useState("");
    const [labTest, setLabTestType] = useState("");
    const status = "pending";


    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0])

    }


    function successModel() {

        const modelBtn = document.getElementById("model-btn")
        modelBtn.click();

    }
    function unsuccessModel() {

        const modelBtn = document.getElementById("model-btn-unsuccess")
        modelBtn.click();

    }


    //should pass event
    function btnClick(e) {

        e.preventDefault();

        const validate = validateForm();

        if (validate === true) {

            const formData = new FormData();

            formData.append('first_name', first_name);
            formData.append('last_name', last_name);
            formData.append('age', age);
            formData.append('nic', nic);
            formData.append('email', email);
            formData.append('telephone', telephone);
            formData.append('file_path', file_path);
            formData.append('status', status);
            formData.append('date', date);
            formData.append('labTest', labTest);
            formData.append('appNo', appNo);
            formData.append('appTime', appTime);

            axios.post("http://localhost:8050/labappoinment/addLabAppoinment", formData).then(function () {

                alert("LabAppoinment Add");
                successModel();

            }).catch(function (err) {

                unsuccessModel();
                alert(err);

            })

        }


    }

    function AssignTime(e) {

        e.preventDefault();
        assignAppoinmentNo(date, labTest);

    }

    const [appoinmentDetails, setAppoinmentDetails] = useState([]);

    useEffect(function () {

        function getLabAppoinmentDetails() {
            axios.get("http://localhost:8050/labappoinment/readlabAppoinment").then(function (res) {

                console.log(res.data);
                setAppoinmentDetails(res.data);

            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getLabAppoinmentDetails();

    }, [])



    function assignAppoinmentNo(date, labTest) {

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

            var labTname = appoinmentDetails[j].labTest;
            var appdate = appoinmentDetails[j].date;

            if (labTest === labTname) {

                if (appdate === date) {

                    i = i + 1;

                }

            }
            if (i > 20) {
                alert("Can not Create Appoinment Today Please Try another Day")
            }

            var t;
            if (i === 1) {
                t = "09: 00AM"
                setTime(t);

            }
            else if (i === 2) {
                t = "09: 30AM"
                setTime(t);
            }
            else if (i === 3) {
                t = "10: 00AM"
                setTime(t);
            }
            else if (i === 4) {
                t = "10: 30AM"
                setTime(t);
            }
            else if (i === 5) {
                t = "11:00AM"
                setTime(t);
            }
            else if (i === 6) {
                t = "11:30AM"
                setTime(t);
            }
            else if (i === 7) {
                t = "12:00PM"
                setTime(t);
            }
            else if (i === 8) {
                t = "12:30PM"
                setTime(t);
            }
            else if (i === 9) {
                t = "13:00PM"
                setTime(t);
            }
            else if (i === 10) {
                t = "13:30PM"
                setTime(t);
            }
            else if (i === 10) {
                t = "14:00PM"
                setTime(t);
            }
            else if (i === 11) {
                t = "14:30PM"
                setTime(t);
            }
            else if (i === 12) {
                t = "15:00PM"
                setTime(t);
            }
            else if (i === 13) {
                t = "15:30PM"
                setTime(t);
            }
            else if (i === 14) {
                t = "15:00PM"
                setTime(t);
            }
            else if (i === 15) {
                t = "15:30PM"
                setTime(t);
            }
            else if (i === 16) {
                t = "16:00PM"
                setTime(t);
            }
            else if (i === 17) {
                t = "16:30PM"
                setTime(t);
            }
            else if (i === 18) {
                t = "17:00PM"
                setTime(t);
            }
            else if (i === 19) {
                t = "17:30PM"
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
        if (Lnic == "") {
            alert("nic must be filled out");
            return false;
        }

        let Lemail = document.forms["Addform"]["email"].value;
        if (Lemail == "") {
            alert("email must be filled out");
            return false;
        }

        let Ldate = document.forms["Addform"]["date"].value;
        if (Ldate == "") {
            alert("date must be filled out");
            return false;
        }

        let LAppNo = document.forms["Addform"]["appoinmentNo"].value;
        if (LAppNo == "") {
            alert("Appoinment No must be filled out");
            return false;
        }

        return true;

    }

    return (

        <div>
            <section id="hero" class="d-flex align-items-center " style={{
                backgroundImage: `url("siteImages/labtestpgBack.jpg")`,
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

                                    <img className="row" src="siteImages/medlogo.png" alt="logo" style={{ width: "100px" }} />
                                    <h5 class="modal-title mt-4 pr-5" id="exampleModalLongTitle"><b>Appoinment Success</b></h5>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="rounded border border-success pb-2">
                                        <h2 className="text-primary">Comfirmation E-mail send<br />With Details</h2>
                                        <h4 className="text-success">Please Check Your Email</h4>
                                        <img src="siteImages/modal-success.png" style={{ width: "50px" }} />
                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-success btn-lg btn-block" onClick={() => navigate("/appoinmentHome")} data-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModalCenterUnsucces" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">

                                <div class="modal-header">

                                    <h5 class="modal-title" id="exampleModalLongTitle">Doctor Appoinment UnSuccess</h5>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div class="modal-body">

                                    <div class="rounded border border-success">
                                        <h2 className="text-primary">Please Try Again</h2><br />
                                        <img src="siteImages/model-unsuccess.png" style={{ width: "50px" }} />
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" onClick={() => navigate("/appoinmentHome")} data-dismiss="modal">OK</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <button type="button" id="model-btn" data-toggle="modal" data-target="#exampleModalCenter"></button>

                <button type="button" id="model-btn-unsuccess" data-toggle="modal" data-target="#exampleModalCenterUnsucces"></button>


                <form name="Addform" method="post" encType="multipart/form-data" className="container was-validated" style={{ backgroundColor: "#bbbdbb", borderRadius: '10px', opacity: '0.85' }}><br />

                    <h3 className="text-primary"><b>Make A Lab Test Appoinments</b></h3>

                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>First Name</b></label>
                            <input name="fname" type="text" className="form-control" id="firstName" placeholder="First Name" onChange={function (e) { setFirstName(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Last Name</b></label>
                            <input name="lname" type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={function (e) { setLastName(e.target.value); }} required />
                        </div><br />

                    </div>
                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Age</b></label>
                            <input name="age" type="number" className="form-control" id="age" placeholder="age" onChange={function (e) { setAge(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Nic</b></label>
                            <input name="nic" type="text" className="form-control" id="nic" placeholder="NIC" onChange={function (e) { setNic(e.target.value); }} required />
                        </div><br />

                    </div>
                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>E-mail</b></label>
                            <input name="email" type="email" className="form-control" id="email" placeholder="E-mail" onChange={function (e) { setEmail(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Telephone</b></label>
                            <input name="telephone" type="text" className="form-control" id="telephone" placeholder="07XXXXXXXXX" onChange={function (e) { setTelephone(e.target.value); }} required />
                        </div><br />

                    </div>
                    <div class="row">

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Date</b></label>
                            <input name="date" type="date" className="form-control" id="date" onChange={function (e) { setDate(e.target.value); }} required />
                        </div><br />

                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="formFileMultiple" class="form-label"><b>Priscription</b></label>
                            <input class="form-control" type="file" id="formFileMultiple" multiple name="file_path" onChange={handleImage} required />
                        </div><br />

                    </div>

                    <div class="row">
                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label for="name"><b>Lab Test Category</b></label>
                            <select className="form-control" onChange={e => setLabTestType(e.target.value)} required>
                                <option key={"Creatinine"} value={"Creatinine"}>Creatinine</option>
                                <option key={"CRP"} value={"CRP"}>CRP</option>
                                <option key={"Electrolytes"} value={"Electrolytes"}>Electrolytes</option>
                                <option key={"ESR"} value={"ESR"}>ESR</option>
                                <option key={"FastingBloodSugar"} value={"FastingBloodSugar"}>Fasting Blood Sugar</option>
                                <option key={"FullBloodCount"} value={"FullBloodCount"}>Full Blood Count</option>
                                <option key={"UrineFR"} value={"UrineFR"}>Urine FR</option>
                            </select>
                        </div>

                        <div className="form-group form-group col-md-2 mt-3 mt-md-0">
                            <label for="name"><b>Appoinment No</b></label>
                            <input name="appoinmentNo" type="text" className="form-control" id="telephone" value={appNo} onChange={function (e) { setTelephone(e.target.value); }} required disabled />
                        </div><br />

                        <div className="form-group col-md-4 mt-3 mt-md-0">
                            <label for="name"><b>Generate Time And Appoinment No</b></label>
                            <button type="button" class="btn btn-outline-primary" onClick={AssignTime}>Generate Appoinment No</button>
                        </div>

                    </div>


                    <div class="row d-flex justify-content-center">

                        <button type="submit" className="btn btn-danger col-md-4 mt-0 mt-md-0 mr-5" onClick={() => navigate("/appoinment")}>Cancel</button>
                        <button type="submit" className="btn btn-success col-md-4 mt-0 mt-md-0" onClick={btnClick}>Submit</button><br />

                    </div><br />
                </form><br /><br />

            </section >
        </div >

    );
}

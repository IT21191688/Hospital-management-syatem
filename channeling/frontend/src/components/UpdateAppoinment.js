import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function UpdateAppoinment() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [doctor_category, setDoctorCategory] = useState("");
    const [doctor_name, setDoctorName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [appNo, setAppoinmentNo] = useState("")
    const [appTime, setTime] = useState("");


    useEffect(function () {

        function getAppoinment() {
            axios.get("http://localhost:8050/appoinment/getoneAppoinment/" + id).then((res) => {

                setDoctorCategory(res.data.doctor_category);
                setDoctorName(res.data.doctor_name);
                setFirstName(res.data.first_name);
                setLastName(res.data.last_name);
                setAge(res.data.age);
                setNic(res.data.nic);
                setEmail(res.data.email);
                setTelephone(res.data.telephone);
                setDate(res.data.date);
                setStatus(res.data.status);
                setAppoinmentNo(res.data.appNo);
                setTime(res.data.appTime);


            }).catch(function (err) {
                alert("data not fech");
                alert(err);
            });
        }
        getAppoinment();

    }, []);


    function successModel() {

        const modelBtn = document.getElementById("model-btn")
        modelBtn.click();

    }

    function unsuccessModel() {

        const modelBtn = document.getElementById("model-btn-unsuccess")
        modelBtn.click();

    }

    function btnClick(e) {

        e.preventDefault();

        const updateAppoinment = {
            doctor_category,
            doctor_name,
            first_name,
            last_name,
            age,
            nic,
            email,
            telephone,
            status,
            date,
            appNo,
            appTime
        }
        console.log(updateAppoinment);

        axios.put("http://localhost:8050/appoinment/updateAppoinment/" + id, updateAppoinment).then(function () {

            alert("Status Updated");
            successModel();
            //navigate("/readAppoinment");
            //window.location.reload();


        }).catch(function () {

            alert(e.err)
            alert("Student Not Updated");
            unsuccessModel();

        })

    }

    return (



        <div className="container">

            <div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <img className="row" src="siteImages/medlogo.png" alt="logo" style={{ width: "100px" }} />
                                <h5 class="modal-title mt-4 pr-5" id="exampleModalLongTitle"><b>Appoinment Update Success</b></h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="rounded border border-success pb-2 pt-2">
                                    <h5 className="text-primary">Appoinment Details Updated.</h5>
                                    <img src="siteImages/modal-success.png" style={{ width: "50px" }} />
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success btn-lg btn-block" onClick={() => navigate("/readAppoinment")} data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <div class="modal fade" id="exampleModalCenter-un" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <img className="row" src="siteImages/medlogo.png" alt="logo" style={{ width: "100px" }} />
                                <h5 class="modal-title mt-4 pr-5" id="exampleModalLongTitle"><b>Appoinment Update UnSuccess.</b></h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="rounded border border-success pb-2 pt-2">
                                    <h5 className="text-primary">Appoinment Details Not Updated.</h5>
                                    <img src="siteImages/modal-success.png" style={{ width: "50px" }} />
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-success btn-lg btn-block" onClick={() => navigate("/readAppoinment")} data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <button type="button" id="model-btn" data-toggle="modal" data-target="#exampleModalCenter"></button>
            <button type="button" id="model-btn-unsuccess" data-toggle="modal" data-target="#exampleModalCenter-un"></button>


            <h1>Update Appoinment Details</h1>
            <h4 className="text-info">Patient Name:&nbsp;{first_name + " " + last_name}</h4>
            <form className="create-form border border-info rounded p-3" style={{ backgroundColor: "#c1e9c2" }}>

                <div class="row">
                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Doctor Category</label>
                        <input placeholder='First Name' className="form-control" value={doctor_category} onChange={(e) => setDoctorCategory(e.target.value)} readOnly />
                    </div>


                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Doctor name</label>
                        <input placeholder='Last Name' className="form-control" value={doctor_name} onChange={(e) => setDoctorName(e.target.value)} readOnly />
                    </div>

                </div>

                <div class="row">

                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">First Name</label>
                        <input placeholder='Age' className="form-control" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Last name</label>
                        <input placeholder='E-mail' className="form-control" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                </div>


                <div class="row">

                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Age</label>
                        <input placeholder='NIC' className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Nic</label>
                        <input placeholder='Telephone' className="form-control" value={nic} onChange={(e) => setNic(e.target.value)} />
                    </div>

                </div>

                <div class="row">
                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Email</label>
                        <input placeholder='Position' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Telephone</label>
                        <input placeholder='CV Data' className="form-control" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                    </div>
                </div>

                <div class="row">
                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Date</label>
                        <input type="text" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} readOnly />
                    </div>

                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Appoinment Number</label>
                        <input type="text" className="form-control" value={appNo} onChange={(e) => setStatus(e.target.value)} readOnly />
                    </div>
                </div>

                <div class="row">
                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Time</label>
                        <input type="text" className="form-control" value={appTime} onChange={(e) => setStatus(e.target.value)} readOnly />
                    </div>
                    <div className="form-group form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Status</label>
                        <input placeholder='Status' className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} />
                    </div>

                </div>

                <div class="row d-flex justify-content-center">

                    <button type="submit" className="btn btn-danger col-md-4 mt-0 mt-md-0 mr-5" onClick={() => navigate("/readAppoinment")}>Cancel</button>
                    <button type="submit" className="btn btn-success col-md-4 mt-0 mt-md-0 " onClick={btnClick}>Update</button>

                </div><br />

            </form>
            <br />
        </div>
    );
} 
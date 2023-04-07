import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import ReactPrint from "react-to-print";
import { useNavigate } from "react-router-dom";



export default function PrintDoAppoinmentResipt() {

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
    const [time, setTime] = useState("");
    const [appNo, setAppNo] = useState("");
    const [status, setStatus] = useState("");

    const modDate = date.split("T00:00:00.000Z");

    //const [appdata, setAppoinemtData] = useState("");

    const ref = useRef();

    const navigate = useNavigate();


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
                setAppNo(res.data.appNo);
                setTime(res.data.appTime);
                setStatus(res.data.status);



            }).catch(function (err) {
                alert("data not fech");
                alert(err);
            });
        }
        getAppoinment();

    }, []);



    return (


        <>
            <main className='background bg-warning' style={{ minHeight: "100vh" }}>
                <header>
                    <div className="input">
                        <h1>Doctor Appoinment Recipt</h1>
                    </div>
                </header>
                <section ref={ref} className="container border border-success rounded" style={{ background: "#ced6d0" }} >
                    <div className="company-details-header row d-flex justify-content-center mt-3">
                        <img className="company-logo" alt="logo" src="siteImages/logo.png" />
                        <label><h2>Medixo E-Health Care Center (PVT) LTD</h2></label>
                    </div>
                    <div className="company-details-container">
                        <div className="company-details">
                            <label className="detailsedit">Address : </label><label>MEDIXO, No 257, Matale Road, Dambulla</label><br />
                            <label className="detailsedit">Email : </label><label>Medxio123@gmail.com</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="detailsedit">Phone: </label><label>0662053122</label>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="title">
                        <div className="row d-flex justify-content-center">
                            <h2>Doctor Appoinment Resipt</h2>
                            <h1 class="border border-warning rounded-circle ml-5 bg-info" style={{ width: "50px" }}>{appNo}</h1>
                        </div>
                        <h6>(for Hospital Usess)</h6>


                    </div>

                    <div class="row ml-4">
                        <div class="row">
                            <h4>Doctor Category:</h4>&nbsp;
                            <h4>{doctor_category}</h4>
                        </div>
                        <div class="row ml-5">
                            <h4>Doctor Name:</h4>&nbsp;
                            <h4>{doctor_name}</h4>
                        </div>
                        <div class="row ml-5">
                            <h4>Date:</h4>&nbsp;
                            <h4>{modDate}</h4>
                        </div>
                        <div class="row ml-5">
                            <h4>Time:</h4>&nbsp;
                            <h4>{time}</h4>
                        </div>

                    </div>

                    <hr></hr>

                    <div >

                        <div class="row ml-4">
                            <div class="row mr-5">
                                <h4>Patient Name:</h4>&nbsp;
                                <h4>{first_name + " " + last_name}</h4>
                            </div>
                            <div class="row mr-5">
                                <h4>Patient Age:</h4>&nbsp;
                                <h4>{age}</h4>
                            </div>
                            <div class="row mr-5">
                                <h4>Patient NIC:</h4>&nbsp;
                                <h4>{nic}</h4>
                            </div>

                        </div><br></br>

                        <div class="row ml-4">
                            <div class="row mr-5">
                                <h4>Patient Email:</h4>&nbsp;
                                <h4>{email}</h4>
                            </div>
                            <div class="row mr-5">
                                <h4>Patient Telephone:</h4>&nbsp;
                                <h4>{telephone}</h4>
                            </div>
                        </div><br></br>

                    </div>
                    <hr></hr>

                    <div className="footer">
                        <label> This is a computer generated document. No signature is required.</label>
                        <label>Print on : {`${new Date().toLocaleString()}`}</label>
                    </div>
                    <br></br>
                </section>

                <div id="printbtn">
                    <ReactPrint trigger={() => <button className="btn btn-primary my-2 mx-1 my-sm-0">Print</button>} content={() => ref.current} />
                    <button className="btn btn-danger" onClick={() => navigate("/backDocResipt")}>Back</button>
                </div>

            </main>
        </>




    );
} 
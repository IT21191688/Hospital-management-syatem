import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import ReactPrint from "react-to-print";
import { useNavigate } from "react-router-dom";

import chartImage from "../siteImages/chartImage.jpg";



export default function GenerateReports() {


    //class component waladi componentdidmount
    //session json with tocken
    const [channeling, setChanneling] = useState([]);
    const [labTestType, setLabTestType] = useState("");
    const [dname, setDoctorName] = useState("");

    useEffect(function () {


        function getDoctorName() {
            axios.get("http://localhost:8050/doctor/readDoctor").then(function (res) {

                console.log(res.data);

                setChanneling(res.data);


            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getDoctorName();
        setDoctorName("Dr rifsy");
        setLabTestType("Creatinine");

    }, [])

    return (





        <section class="container" style={{
            backgroundImage: `url(${chartImage})`,
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            backgroundSize: 'cover',
            position: 'center',
            maxWidth: '100%'

        }}>
            <div class="row">
                <div class="col-md-5 justify-content-center mt-5 container bg-secondary ml-5 border border-success rounded" style={{ opacity: "0.8" }}>
                    <br></br><br></br>
                    <h2 className="text-light">Doctor Appoinment Reports</h2>
                    <div className="form-group mt-5">
                        <label for="name" className="mt-4"><b ><h3>Select Doctor</h3></b></label>
                        <select className="form-control" onChange={e => setDoctorName(e.target.value)}>
                            {channeling.map(item => (
                                <option key={item.doctor_name} value={item.doctor_name}>{item.doctor_name}</option>
                            ))}
                        </select>
                    </div><br /><br /><br />

                    <a href={'/generateDoctorReport/' + dname}><button class="btn btn-success btn-lg">Generate Chart</button></a>
                </div>
                <div class="col-md-5 justify-content-center mt-5 bg-secondary mr-5 border border-success rounded" style={{ opacity: "0.8" }}>
                    <br></br><br></br>
                    <h2 className="text-light">Lab Appoinment Reports</h2>
                    <div className="form-group mt-5">
                        <label for="name" className="mt-4"><b><h3>Lab Test Category</h3></b></label>
                        <select className="form-control" onChange={e => setLabTestType(e.target.value)} required>
                            <option key={"Creatinine"} value={"Creatinine"}>Creatinine</option>
                            <option key={"CRP"} value={"CRP"}>CRP</option>
                            <option key={"Electrolytes"} value={"Electrolytes"}>Electrolytes</option>
                            <option key={"ESR"} value={"ESR"}>ESR</option>
                            <option key={"FastingBloodSugar"} value={"FastingBloodSugar"}>Fasting Blood Sugar</option>
                            <option key={"FullBloodCount"} value={"FullBloodCount"}>Full Blood Count</option>
                            <option key={"UrineFR"} value={"UrineFR"}>Urine FR</option>
                        </select>
                    </div><br></br><br /><br />

                    <a href={'/generateLabTestReport/' + labTestType}><button class="btn btn-success btn-lg">Generate Chart</button></a>
                    <br></br><br></br><br></br>
                </div>

            </div>
        </section>




    );
}

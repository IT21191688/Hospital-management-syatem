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

    }, [])

    return (





        <section class="container" style={{
            backgroundImage: `url(${chartImage})`,
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            backgroundSize: 'cover',
            position: 'center',
            maxWidth: '70%'

        }}>
            <div class="row">
                <div class="col">
                    <h2>Doctor Appoinment Reports</h2>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label for="name"><b>Doctor</b></label>
                        <select className="form-control" onChange={e => setDoctorName(e.target.value)}>
                            {channeling.map(item => (
                                <option key={item.doctor_name} value={item.doctor_name}>{item.doctor_name}</option>
                            ))}
                        </select>
                    </div><br />

                    <a href={'/generateDoctorReport/' + dname}><button class="btn btn-primary btn-sm">Generate Chart</button></a>
                </div>
                <div class="col">
                    <h2>Lab Appoinment Reports</h2>
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
                    </div><br></br>

                    <a href={'/generateLabTestReport/' + labTestType}><button class="btn btn-primary btn-sm">Generate Chart</button></a>
                </div>
            </div>
        </section>




    );
}

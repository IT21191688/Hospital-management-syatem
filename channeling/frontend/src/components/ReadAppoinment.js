import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink, props } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import moment from "moment";


export default function ReadAppoinment() {

    //class component waladi componentdidmount
    //session json with tocken
    const [appoinments, setAppoinments] = useState([]);
    const [channeling, setChanneling] = useState([]);

    const navigate = useNavigate();


    useEffect(function () {

        function getAppoinment() {
            axios.get("http://localhost:8050/appoinment/readAppoinment").then(function (res) {

                console.log(res.data);

                setAppoinments(res.data);

                console.log(res.data.file_path)



            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getAppoinment();


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

    const [filter, setFilter] = useState("");
    const [filterDoc, setDocFilter] = useState("");
    const [filterDat, setDateFilter] = useState("");

    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    function filterDate(e) {
        setDateFilter(e.target.value);
    }

    //filtering doctor
    function filterDoctor(e) {
        setDocFilter(e.target.value);
    }
    const filteredReports = appoinments.filter((rep) => {
        return rep.doctor_name.toLowerCase().includes(filterDoc.toLowerCase()) & rep.nic.toLowerCase().includes(filter.toLowerCase()) & rep.date.toLowerCase().includes(filterDat.toLowerCase());
    })




    return (

        <div className="container-md" style={{ overflow: "hidden" }}>


            <div class="text-white  " style={{ background: "#2F4FAA", height: "180px" }}>
                <h1 className="text-light">Doctor Appoinments</h1>

                <div class="row mt-4 justify-content-center">

                    <div className="form-group col-md-2 mt-3 mt-md-0">
                        <label for="name"><b>Doctor</b></label><br />
                        <select className="form-control" onChange={filterDoctor}>
                            {channeling.map(item => (
                                <option key={item.doctor_name} value={item.doctor_name}>{item.doctor_name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group col-md-2 mt-3 mt-md-0">
                        <label for="name"><b>Date</b></label><br></br>
                        <input className="form-control" type="date" onChange={filterDate} />
                    </div>
                    <div className="form-group col-md-2 mt-3 mt-md-0">
                        <label for="name"><b>Search</b></label><br></br>
                        <input className="form-control search" type="text" placeholder="Search by NIC" onChange={handleFilterChange} />
                    </div>

                    <div className="form-group col-md-2 mt-3 mt-md-0">
                        <br />
                        <button type="button" class="btn text-black mt-2" style={{ background: "#26CDD1" }} onClick={function () { navigate("/generateReports") }} ><b>Generate charts</b></button>
                    </div>

                </div>


            </div>

            <table className="table table-striped table-hover" id="myTable">
                <thead>
                    <tr>
                        <th scope="col">Doctor</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Contact Details</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                        <th scope="col" className="pr-4">Recipt</th>
                    </tr>

                </thead>
                <tbody>
                    {filteredReports.map((appoinment) => (


                        <tr>
                            <td>{appoinment.doctor_category + " " + appoinment.doctor_name}</td>
                            <td>{appoinment.first_name + " " + appoinment.last_name}</td>
                            <td>{appoinment.nic}</td>
                            <td>{appoinment.email + " " + appoinment.telephone}</td>
                            <td>{moment(appoinment.date).utc().format('YYYY-MM-DD') + " " + appoinment.appTime}</td>
                            <td>{appoinment.appNo}</td>
                            <td>{appoinment.status}</td>
                            <td><a href={'/updateAppoinment/' + appoinment._id}><button class="btn btn-sm text-white" style={{ background: "#26CDD1", width: "100px" }}>Update</button></a></td>
                            <td><a href={'/deleteAppoinment/' + appoinment._id}><button class="btn btn-sm text-white" style={{ background: "#E53D3D", width: "100px" }}>Delete</button></a></td>
                            <td><a href={'/printAppoinment/' + appoinment._id}><button class="btn btn-sm text-white" style={{ background: "#2F4FAA", width: "100px" }}>Print</button></a></td>
                        </tr>

                    ))}



                </tbody>



            </table>



        </div >



    )


}

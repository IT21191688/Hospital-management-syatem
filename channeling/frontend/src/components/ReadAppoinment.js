import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink, props } from 'react-router-dom'


export default function ReadAppoinment() {

    //class component waladi componentdidmount
    //session json with tocken
    const [appoinments, setAppoinments] = useState([]);
    const [channeling, setChanneling] = useState([]);

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

        <div className="container-md bg-light">
            <h1 className="text-info">Doctor Appoinments</h1>

            <div class="row bg-info text-white d-flex justify-content-center">

                <div class="row">
                    <div className="form-group col-md-3 mt-3 mt-md-0">
                        <label for="name"><b>Doctor</b></label><br />
                        <select className="form-control" onChange={filterDoctor}>
                            {channeling.map(item => (
                                <option key={item.doctor_name} value={item.doctor_name}>{item.doctor_name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group col-md-3 mt-3 mt-md-0">
                        <label for="name"><b>Date</b></label><br></br>
                        <input className="form-control" type="date" onChange={filterDate} />
                    </div>
                    <div className="form-group col-md-3 mt-3 mt-md-0">
                        <label for="name"><b>Search</b></label><br></br>
                        <input className="form-control search" type="text" placeholder="Search by NIC" onChange={handleFilterChange} />
                    </div>

                    <div className="form-group col-md-3 mt-3 mt-md-0">
                        <br></br>
                        <button type="button" class="btn btn btn-dark"> <Link to="/generateReports" className="nav-link">Generate charts</Link></button>
                    </div>

                </div>


            </div>

            <table className="table table-striped table-hover" id="myTable">
                <thead>
                    <tr>
                        <th scope="col">Doctor</th>
                        <th scope="col">Patient Name & Age</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Contact Details</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                        <th scope="col" className="tableTd">Resipt</th>
                    </tr>

                </thead>
                <tbody>
                    {filteredReports.map((appoinment) => (

                        <tr>
                            <td>{appoinment.doctor_category + " " + appoinment.doctor_name}</td>
                            <td>{appoinment.first_name + " " + appoinment.last_name + " " + "(" + appoinment.age + ")"}</td>
                            <td>{appoinment.nic}</td>
                            <td>{appoinment.email + " " + appoinment.telephone}</td>
                            <td>{appoinment.date + " " + appoinment.appTime}</td>
                            <td>{appoinment.appNo}</td>
                            <td>{appoinment.status}</td>
                            <td><a href={'/updateAppoinment/' + appoinment._id}><button class="btn btn-primary btn-sm">Update</button></a></td>
                            <td><a href={'/deleteAppoinment/' + appoinment._id}><button class="btn btn-primary btn-sm">Delete</button></a></td>
                            <td><a href={'/printAppoinment/' + appoinment._id}><button class="btn btn-primary btn-sm">Print</button></a></td>
                        </tr>

                    ))}



                </tbody>



            </table>



        </div >



    )


}

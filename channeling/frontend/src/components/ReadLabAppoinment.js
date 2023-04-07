import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink, props } from 'react-router-dom'


export default function ReadLabAppoinment() {

    //class component waladi componentdidmount
    //session json with tocken
    const [labAppoinments, setLabAppoinment] = useState([]);
    const [date, setLabAppoinmentDate] = useState("");

    useEffect(function () {

        function getLabAppoinment() {
            axios.get("http://localhost:8050/labappoinment/readlabAppoinment").then(function (res) {

                console.log(res.data);

                setLabAppoinmentDate(res.data.date);
                setLabAppoinment(res.data);



            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getLabAppoinment();




    }, [])


    const today = new Date();
    const dateString = today.toLocaleDateString(); // format as "MM/DD/YYYY"

    const [filter, setFilter] = useState("");

    function handleFilterChange(e) {
        setFilter(e.target.value);
    }
    const filteredReports = labAppoinments.filter((rep) => {
        return rep.nic.toLowerCase().includes(filter.toLowerCase());

    })


    const [src, setSrc] = useState([]);


    const imageSrc = (e) => {
        console.log(e.target.src);
        setSrc(e.target.src)
    }


    return (

        <div >
            <h1>All LabAppoinments</h1>

            <h3>{dateString}</h3>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img id="modelImg" src={src} width="350px" height="300px" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <input type="text" className="search form-control col-md-3 mt-3 mt-md-0 float-right" placeholder="Search by NIC" onChange={handleFilterChange} /><br></br>




            <table className="table table-striped table-hover" id="myTable">
                <thead>
                    <tr>
                        <th scope="col">Patient Name</th>
                        <th scope="col">NiC</th>
                        <th scope="col">Contact</th>
                        <th scope="col">CV</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Lab Test</th>
                        <th scope="col">Number</th>
                        <th scope="col">Status</th>
                        <th scope="col" className="tableTd">Update</th>
                        <th scope="col" className="tableTd">Delete</th>
                        <th scope="col" className="tableTd">Recipt</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReports.map((labAppoinment) => (



                        <tr>
                            <td>{labAppoinment.first_name + " " + labAppoinment.last_name + " " + "(" + labAppoinment.age + ")"}</td>
                            <td>{labAppoinment.nic}</td>
                            <td>{labAppoinment.email + " " + labAppoinment.telephone}</td>
                            <td><button type="button" data-toggle="modal" data-target="#exampleModalCenter">

                                <img
                                    id="myImg"
                                    height={"50px"}
                                    alt="Snow"
                                    width={"40px"}
                                    src={`http://localhost:8050/Appoinment_slip/${labAppoinment.file_path}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={imageSrc}

                                />
                            </button>

                            </td>
                            <td className="tableTd">{labAppoinment.date + " " + labAppoinment.appTime}</td>
                            <td className="tableTd">{labAppoinment.labTest}</td>
                            <td className="tableTd">{labAppoinment.appNo}</td>
                            <td className="tableTd">{labAppoinment.status}</td>
                            <td className="tableTd"><a href={'/updateLabAppoinment/' + labAppoinment._id}><button class="btn btn-primary btn-sm">Update</button></a></td>
                            <td className="tableTd"><a href={'/deleteLabAppoinment/' + labAppoinment._id}><button class="btn btn-primary btn-sm">Delete</button></a></td>
                            <td><a href={'/printLabAppoinment/' + labAppoinment._id}><button class="btn btn-primary btn-sm">Print</button></a></td>

                        </tr>

                    ))}

                </tbody>


            </table>



        </div >



    )


}

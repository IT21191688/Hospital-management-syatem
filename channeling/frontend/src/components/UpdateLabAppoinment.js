import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';




export default function UpdateLabAppoinment() {

    const { id } = useParams();

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [file_path, setImage] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [appNo, setAppoinmentNo] = useState("")
    const [appTime, setTime] = useState("");
    const [labTest, setLabTestType] = useState("");


    useEffect(function () {

        function getLabAppoinment() {
            axios.get("http://localhost:8050/labappoinment/getonelabAppoinment/" + id).then((res) => {

                setFirstName(res.data.first_name);
                setLastName(res.data.last_name);
                setAge(res.data.age);
                setNic(res.data.nic);
                setEmail(res.data.email);
                setTelephone(res.data.telephone);;
                setImage(res.data.file_path);
                setStatus(res.data.status);
                setDate(res.data.date);
                setAppoinmentNo(res.data.appNo);
                setTime(res.data.appTime);
                setLabTestType(res.data.labTest);

                alert(res.data.first_name)


            }).catch(function (err) {
                alert("data not fech");
                alert(err);
            });
        }
        getLabAppoinment();

    }, []);

    function btnClick(e) {

        e.preventDefault();

        const updateLabAppoinment = {
            first_name,
            last_name,
            age,
            nic,
            email,
            telephone,
            file_path,
            status,
            date,
            labTest,
            appNo,
            appTime

        }
        console.log(updateLabAppoinment);

        axios.put("http://localhost:8050/labappoinment/updatelabAppoinment/" + id, updateLabAppoinment).then(function () {

            alert("Status Updated");


        }).catch(function () {

            alert("Student Not Updated");

        })

    }

    function cancelBtn() {

        window.location.href = '/readLabAppoinment';

    }

    return (



        <div className="container">
            <h1>Update Lab Test Appoinment Details</h1>
            <form className="create-form container" style={{ backgroundColor: "#bbbdbb", borderRadius: '10px', opacity: '0.85' }}>

                <div class="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">First Name</label>
                        <input placeholder='First Name' className="form-control" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Last Name</label>
                        <input placeholder='Last Name' className="form-control" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div class="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Age</label>
                        <input placeholder='Age' className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">E-mail</label>
                        <input placeholder='E-mail' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div class="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">NiC</label>
                        <input placeholder='NIC' className="form-control" value={nic} onChange={(e) => setNic(e.target.value)} />
                    </div>

                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Telephone</label>
                        <input placeholder='Telephone' className="form-control" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                    </div>
                </div>

                <div class="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Date</label>
                        <input placeholder='Position' className="form-control" value={date} onChange={(e) => setDate(e.target.value)} readOnly />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Priscription</label>
                        <input placeholder='CV Data' className="form-control" value={file_path} onChange={(e) => setImage(e.target.value)} readOnly />
                    </div>
                </div>
                <div class="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Test Category</label>
                        <input placeholder='Status' className="form-control" value={labTest} onChange={(e) => setStatus(e.target.value)} readOnly />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Appoinment No</label>
                        <input placeholder='Status' className="form-control" value={appNo} onChange={(e) => setStatus(e.target.value)} readOnly />
                    </div>
                </div>
                <div class="row">
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Appoinment Time</label>
                        <input placeholder='Status' className="form-control" value={appTime} onChange={(e) => setStatus(e.target.value)} readOnly />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0" >
                        <label for="name">Status</label>
                        <input placeholder='Status' className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} />
                    </div>
                </div>
                <div class="row d-flex justify-content-center">

                    <Link to="/readLabAppoinment" type="submit" className="btn btn-danger col-md-4 mt-0 mt-md-0 mr-4">Cancel</Link>
                    <button type='submit' className="btn btn-success col-md-4 mt-0 mt-md-0" onClick={btnClick}>Submit</button>
                </div><br />
            </form>
        </div >
    );
} 
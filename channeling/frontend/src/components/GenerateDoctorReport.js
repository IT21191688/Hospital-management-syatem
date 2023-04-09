import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'



export default function PrintDoAppoinmentResipt() {

    const { dname } = useParams();


    const [success, setSuccess] = useState("");
    const [cancel, setCancel] = useState("");
    const [pending, setFuther] = useState("");
    const [unsuccess, setUnsuccess] = useState("");

    const [reportDate, setDate] = useState("");


    const [appoinments, setAppoinments] = useState([]);


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



    }, []);


    const repModDate = reportDate + "T00:00:00.000Z";

    // Sample data
    const data = [
        { name: 'Success', students: success },
        { name: 'Unsuccess', students: unsuccess },
        { name: 'Pending', students: pending },
        { name: 'Cancel', students: cancel }
    ];




    function AssignTime(e) {
        e.preventDefault();
        calculateAppoinmentStatus();

    }


    function calculateAppoinmentStatus() {

        let success = 0;
        let unsuccess = 0;
        let pending = 0;
        let cancel = 0;


        for (var j = 0; j <= appoinments.length; j++) {

            if (appoinments[j].doctor_name === dname) {

                if (appoinments[j].date === repModDate) {


                    if (appoinments[j].status === "success") {
                        success++;
                    }
                    else if (appoinments[j].status === "unsuccess") {
                        unsuccess++;
                    }
                    else if (appoinments[j].status === "pending") {
                        pending++;
                    }
                    else {

                        cancel++;
                    }

                }

            }

            setCancel(cancel)
            setSuccess(success)
            setFuther(pending)
            setUnsuccess(unsuccess)

        }


    }

    const colors = ['#FFC107', '#2196F3', '#4CAF50', '#E91E63'];

    return (


        <div class="container">
            <div class="row">
                <div class="col">
                    <div className="">
                        <br></br>
                        <h3>Doctor Name: {dname}</h3><br></br>
                        <div className="form-group col-md-6">
                            <label for="name "><b>date</b></label>
                            <input name="date" type="date" className="form-control" id="date" onChange={function (e) { setDate(e.target.value); }} required />
                        </div><br />

                        <div>
                            <h3>Appoinment Count</h3><br>
                            </br>
                            <h5>Success&nbsp;:{success}</h5>
                            <h5>Unsucces:{unsuccess}</h5>
                            <h5>Pending&nbsp;:{pending}</h5>
                            <h5>cancel&nbsp;:{cancel}</h5>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <h2>Appoinment Details Chart</h2><br />
                        <BarChart width={600} height={400} data={data}>
                            <Bar dataKey="students" fill={colors[0]} />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </BarChart><br />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" class="btn btn-outline-success" onClick={AssignTime}>Generate Today Chart</button>
                    </div>
                </div>
            </div >
        </div >


    );
} 
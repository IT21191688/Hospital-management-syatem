import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'



export default function PrintDoAppoinmentResipt() {

    const { dname } = useParams();


    const [success, setSuccess] = useState("");
    const [cancel, setCancel] = useState("");
    const [futher, setFuther] = useState("");
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
        { name: 'Cancel', students: cancel },
        { name: 'Fether', students: futher },
        { name: 'Unsuccess', students: unsuccess }
    ];

    // const modDate = date.split("T00:00:00.000Z");



    function AssignTime(e) {
        e.preventDefault();
        calculateAppoinmentStatus();

    }


    function calculateAppoinmentStatus() {

        let success = 0;
        let unsuccess = 0;
        let futher = 0;
        let cancel = 0;


        for (var j = 0; j <= appoinments.length; j++) {




            if (appoinments[j].doctor_name === dname) {

                //alert(modToday);

                if (appoinments[j].date === repModDate) {


                    if (appoinments[j].status === "success") {
                        success++;
                    }
                    else if (appoinments[j].status === "unsuccess") {
                        unsuccess++;
                    }
                    else if (appoinments[j].status === "futher") {
                        futher++;
                    }
                    else {

                        cancel++;
                    }

                    //alert(appoinments[j].date);
                }

            }




            setCancel(cancel)
            setSuccess(success)
            setFuther(futher)
            setUnsuccess(unsuccess)

        }


    }

    const colors = ['#FFC107', '#2196F3', '#4CAF50', '#E91E63'];

    return (

        <div>
            <div>
                <div className="form-group col-md-4 mt-3 mt-md-0">
                    <label for="name"><b>date</b></label>
                    <input name="date" type="date" className="form-control" id="date" onChange={function (e) { setDate(e.target.value); }} required />
                </div><br />

            </div>
            <div>
                <label class="text-danger"><h1>Doctor Name: {dname}</h1></label><br></br>
                <label class="text-success"><h2>Appoinment Details Chart</h2></label>
                <div class="d-flex justify-content-center col">
                    <BarChart width={600} height={500} data={data}>
                        <Bar dataKey="students" fill={colors[0]} />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </BarChart><br></br>



                </div>
            </div>
            <div className="">
                <button type="button" class="btn btn-outline-primary" onClick={AssignTime}>Generate Today Chart</button>
            </div>

        </div>


    );
} 
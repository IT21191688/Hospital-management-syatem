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


    const [labAppoinments, setLabAppoinment] = useState([]);


    useEffect(function () {

        function getLabAppoinment() {
            axios.get("http://localhost:8050/labappoinment/readlabAppoinment").then(function (res) {

                console.log(res.data);

                setLabAppoinment(res.data);



            }).catch(function (err) {
                alert("data not fech" + err);
            })
        }
        getLabAppoinment();



    }, []);


    // Sample data
    const data = [
        { name: 'Success', students: success },
        { name: 'Cancel', students: cancel },
        { name: 'Fether', students: futher },
        { name: 'Unsuccess', students: unsuccess }
    ];



    function AssignTime(e) {
        e.preventDefault();
        calculateAppoinmentStatus();

    }


    function calculateAppoinmentStatus() {

        let success = 0;
        let unsuccess = 0;
        let futher = 0;
        let cancel = 0;


        for (var j = 0; j <= labAppoinments.length; j++) {



            if (labAppoinments[j].doctor_name === dname) {


                if (labAppoinments[j].status === "success") {
                    success++;
                }
                else if (labAppoinments[j].status === "unsuccess") {
                    unsuccess++;
                }
                else if (labAppoinments[j].status === "futher") {
                    futher++;
                }
                else {

                    cancel++;
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
            <label class="text-success"><h2>Lab Appoinment Details Chart</h2></label>
            <div class="d-flex justify-content-center col">
                <BarChart width={600} height={500} data={data}>
                    <Bar dataKey="students" fill={colors[0]} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart><br></br>



            </div>
            <div className="">
                <button type="button" class="btn btn-outline-primary" onClick={AssignTime}>Generate Today Chart</button>
            </div>

        </div>


    );
} 
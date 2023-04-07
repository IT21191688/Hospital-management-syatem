import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';


export default function DeleteLabAppoinment() {

    const { id } = useParams();
    const log = useRef(true);


    useEffect(function () {

        if (log.current) {
            function DeleteLabAppoinment() {


                axios.delete("http://localhost:8050/labappoinment/deletelabAppoinment/" + id).then(function (res) {
                    log.current = false;
                    alert("Delete Successfull");

                }).catch(function (err) {
                    alert("delete Fail");
                    alert(err);
                });
                log = false;


            }
            DeleteLabAppoinment();


        }

    }, []);




}
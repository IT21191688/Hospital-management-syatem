import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Styles from "../Styles/AdminDashboardStyle.module.css"

export default function AdminDashbord() {

    const navigate = useNavigate();


    return (
        <div>

            <div className={Styles.navigatorHeader}>
                <img src="siteImages/medlogo.png" className={Styles.dashlogo} />
                <span id={Styles.clogo} className={Styles.logoText}>Medixo-E-Health</span>
                <span className={Styles.logoText}>Admin Dashboard</span>
                <button onClick={function () { navigate("/AdminDashboard") }}>Home</button>
            </div>

            <div className={Styles.navigatorContainer}>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src="siteImages/appoinmentlogo.png" className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>


            </div>

        </div >




    )
}
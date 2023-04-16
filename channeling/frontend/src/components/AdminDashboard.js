import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Styles from "../Styles/AdminDashboardStyle.module.css"
import medlogo from "../siteImages/medlogo.png";
import appLogo from "../siteImages/appoinmentlogo.png";

export default function AdminDashbord() {

    const navigate = useNavigate();


    return (
        <div style={{ background: "#b3b3b3" }}>

            <div className={Styles.navigatorHeader}>
                <img src={medlogo} className={Styles.dashlogo} />
                <span id={Styles.clogo} className={Styles.logoText}>Medixo-E-Health</span>
                <span className={Styles.logoText}>Admin Dashboard</span>
                <button onClick={function () { navigate("/AdminDashboard") }}>Home</button>
            </div>

            <div className={Styles.navigatorContainer}>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>

                <div className={Styles.navigatorContent} onClick={function () { navigate("/AppoinmentAdmin") }}>
                    <img src={appLogo} className={Styles.Editimg} />
                    <span className={Styles.logoText}>Appoinment Management</span>
                </div>


            </div>

        </div >




    )
}
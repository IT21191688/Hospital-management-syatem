import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashbord() {
    return (
        <div>
            <div className="sidebar">
                <div className="logo-details">
                    <a href="index.html">
                        <i class='bx bxl-unsplash'></i>
                    </a>
                    <span className="logo_name">Dashboard</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <i className='bx bx-user'></i>
                            <span className="links_name">Manage Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-book'></i>
                            <span className="links_name">Exams</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-book-bookmark'></i>
                            <span className="links_name">Results</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-help-circle'></i>
                            <span className="links_name">Help and Support</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-note'></i>
                            <span className="links_name">Notices</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className="links_name">Settings</span>
                        </a>
                    </li>
                    <li className="log_out">
                        <a href="#">
                            <i className='bx bx-log-out'></i>
                            <span className="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='bx bx-menu sidebarBtn'></i>
                        <span className="dashboard">A+ ONLINE EXAMINATION</span>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="profile-details">
                        <img src="images/profile.jpg" alt="" />
                        <span className="admin_name">Administrator</span>
                        <i className='bx bx-chevron-down'></i>
                    </div>
                </nav>
            </section>

        </div>




    )
}
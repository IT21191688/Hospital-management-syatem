import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import docAppoinmentpgBack from "../siteImages/docAppoinmentpgBack.jpg";
import labAppoinmentpgBack from "../siteImages/labtestpgBack.jpg";

export default function AppoinementsAdmin() {

    const navigate = useNavigate();


    return (

        <div className="bg-info" style={{ minHeight: "100vh" }}>
            <div className="container">
                <div>
                    <h1>Appoinment Admin Page</h1>
                </div><br></br>
                <div class="card-deck" style={{ height: "400px" }}>
                    <a class="card bg-secondary" onClick={() => navigate("/ReadAppoinment")} style={{ cursor: "pointer" }}>
                        <div>
                            <img class="card-img-top" height={"400px"} src={docAppoinmentpgBack} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title"><b>Doctor Appoinments</b></h5>
                            </div>
                        </div>
                    </a>

                    <a class="card bg-secondary" onClick={() => navigate("/ReadLabAppoinment")} style={{ cursor: "pointer" }}>
                        <div >
                            <img class="card-img-top" height={"400px"} src={labAppoinmentpgBack} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title"><b>LabTest Appoinments</b></h5>
                            </div>
                        </div>
                    </a>


                </div>
            </div>
            <br></br><br></br><br></br><br></br>
        </div >


    )

}
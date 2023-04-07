import { Link } from "react-router-dom";
export default function AppoinementsAdmin() {
    return (

        <div className="bg-info">
            <div className="container">
                <div>
                    <h1>Appoinment Admin Page</h1>
                </div><br></br>
                <div class="card-deck">
                    <a class="card">
                        <Link to="/ReadAppoinment">
                            <div>
                                <img class="card-img-top" height={"400px"} src="siteImages/docAppoinmentpgBack.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Doctor Appoinments</h5>
                                </div>
                            </div>
                        </Link>
                    </a>

                    <a class="card">
                        <Link to="/ReadLabAppoinment">
                            <div >
                                <img class="card-img-top" height={"400px"} src="siteImages/labtestpgBack.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">LabTest Appoinments</h5>
                                </div>
                            </div>
                        </Link>
                    </a>


                </div>
            </div>
            <br></br><br></br><br></br><br></br>
        </div>


    )

}
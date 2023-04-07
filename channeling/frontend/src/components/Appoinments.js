import { useNavigate } from "react-router-dom";
export default function Appoinements() {
    const navigate = useNavigate();
    return (

        <div>
            <section id="hero" class="d-flex align-items-center bg-info">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 className="text-white pr-5">Channel a doctor quick and easy with <br />Direct Appoinments at<br /> Medixo E-Health</h2>
                            <div class="d-flex ml-5">
                                <button class="btn-get-started scrollto ml-5" onClick={() => navigate("/AddAppoinment")}>Make Doctor Appoinment</button>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="siteImages/docAppoinment.png" class="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section >

            <section id="hero" class="d-flex align-items-center bg-secondary">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex flex-column justify-content-center">
                            <h2 className="text-white pr-5">Make A Lab Test Appoinments quick and<br /> easy Direct Appoinments at<br /> Medixo E-Health</h2>
                            <div class="d-flex ml-5">
                                <button class="btn-get-started scrollto ml-5" onClick={() => navigate("/AddLabAppoinment")}>Make LabTest appoinment</button>
                            </div>
                        </div>
                        <div class="col-lg-6 order-2 order-lg-1 hero-img">
                            <img src="siteImages/labAppoinment.png" class="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>

        </div >


    )

}

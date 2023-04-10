import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import ReadAppoinment from "./components/ReadAppoinment";
import DeleteAppoinment from "./components/DeleteAppoinment";
import AddAppoinment from "./components/AddAppoinment";
import UpdateAppoinment from "./components/UpdateAppoinment";
import Appoinements from "./components/Appoinments";
import AddLabAppoinment from "./components/AddLabAppoinment";
import ReadLabAppoinment from "./components/ReadLabAppoinment";
import UpdateLabAppoinment from "./components/UpdateLabAppoinment";
import DeleteLabAppoinment from "./components/DeleteLabAppoinment";
import AppoinementsAdmin from "./components/AppoinmntsAdmin";
import PrintDoAppoinmentResipt from "./components/PrintDoAppoinmentResipt";
import PrintLabAppoinmentResipt from "./components/PrintLabAppoinmentResipt";
import GenerateReports from "./components/GenerateReports";
import SearchAppoinment from "./components/SearchAppoinment";
import GenerateDoctorReport from "./components/GenerateDoctorReport";
import GenerateLabTestReport from "./components/GenerateLabTestReport";
import AdminDashboard from "./components/AdminDashboard";


import './App.css'
import './JavaSc'
import Home from "./components/Home";


function App() {

  const userRole = "user";
  return (


    <div className="App">


      <Router>

        <Header />

        <Routes>

          <Route exact path="/appoinment" element={<Appoinements />} />
          <Route exact path="/appoinmentAdmin" element={<AppoinementsAdmin />} />
          <Route exact path="/generateReports" element={<GenerateReports />} />


          <Route exact path="/AddLabAppoinment" element={<AddLabAppoinment />} />
          <Route exact path="/readLabAppoinment" element={<ReadLabAppoinment />} />
          <Route exact path="/updateLabAppoinment/:id" element={<UpdateLabAppoinment />} />
          <Route exact path="/deleteLabAppoinment/:id" element={<DeleteLabAppoinment />} />
          <Route exact path="/generateLabTestReport/:labTestType" element={<GenerateLabTestReport />} />
          <Route exact path="/printLabAppoinment/:id" element={<PrintLabAppoinmentResipt />} />


          <Route exact path="/readAppoinment" element={<ReadAppoinment />} />
          <Route exact path="/AddAppoinment" element={<AddAppoinment />} />
          <Route exact path="/updateAppoinment/:id" element={<UpdateAppoinment />} />
          <Route exact path="/deleteAppoinment/:id" element={<DeleteAppoinment />} />
          <Route exact path="/printAppoinment/:id" element={<PrintDoAppoinmentResipt />} />
          <Route exact path="/generateDoctorReport/:dname" element={<GenerateDoctorReport />} />
          <Route exact path="/SearchAppoinment/:nic" element={<SearchAppoinment />} />


          <Route exact path="/backLabResipt" element={<ReadLabAppoinment />} />
          <Route exact path="/backDocResipt" element={<ReadAppoinment />} />
          <Route exact path="/appoinmentHome" element={<Appoinements />} />


          <Route exact path="/adminDashboard" element={<AdminDashboard />} />

        </Routes>

      </Router>



    </div >


  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NaviBar from "./Components/NaviBar";
import LandingPage from "./Sections/LandingPage";
import SignIn from "./Sections/SignIn";
import Policy from "./Sections/Policy";
import ContactUs from "./Sections/ContactUs";
import Dashboard from "./Dashboard";
import AddStation from "./Dashboard Sections/AddStation";
import ViewStations from "./Dashboard Sections/ViewStations";
import Vehicles from "./Dashboard Sections/Vehicles";
import Customers from "./Dashboard Sections/Customers";

export default function App() {
  return (
    <div>
      <Router>
        <NaviBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="Policy" element={<Policy/>} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="add-station" element={<AddStation/>} />
            <Route path="view-stations" element={<ViewStations />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="customers" element={<Customers />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

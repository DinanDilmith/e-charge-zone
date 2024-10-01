import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NaviBar from "./Components/NaviBar";
import LandingPage from "./Sections/LandingPage";
import SignIn from "./Sections/SignIn";
import Policy from "./Sections/Policy";
import ContactUs from "./Sections/ContactUs";

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
        </Routes>
      </Router>
    </div>
  );
}

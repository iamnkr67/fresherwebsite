import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import TimelineSection from "./components/TimelineSection";
import AdminLogin from "./pages/AdminLogin";
import SeatLayout from "./components/SeatLayout";
import AdminDashBoard from "./pages/AdminDashBoard";
import AdminNavbar from "./pages/AdminNavbar";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <HeroSection />
                  <FeatureSection />
                  <ImageSlider />
                  <TimelineSection />
                  <Footer />
                </div>
              </>
            }
          />

          {/* Seat Booking Page */}
          <Route
            path="/book-seat"
            element={
              <>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <SeatLayout />
                </div>
                <Footer />
              </>
            }
          />

          {/* Admin Login Page */}
          <Route
            path="/adminlogin"
            element={
              <>
              
                <AdminLogin onLoginSuccess={handleLoginSuccess} />
              </>
            }
          />

          {/* Admin Dashboard */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <>
                  <AdminNavbar />
                  <AdminDashBoard />
                </>
              ) : (
                <>
                  <AdminNavbar />
                  <AdminLogin onLoginSuccess={handleLoginSuccess} />
                </>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

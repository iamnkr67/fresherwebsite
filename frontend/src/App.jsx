import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ImageSlider from "./components/ImageSlider";
import TimelineSection from "./components/TimelineSection";
import AdminLogin from "./components/AdminLogin";
import ApplyPerformance from "./components/ApplyPerformance";
import AdminDashBoard from "./pages/AdminDashBoard";
import BookedSeats from "./pages/BookedSeats";
import Contestants from "./pages/Contestants";
import SeatLayout from "./components/SeatLayout"; // The SeatLayout for displaying the seats
import SeatModal from "./components/SeatModal"; // The modal to enter details for booking
import AdminPanel from "./components/AdminPanel"; // The admin panel for confirming bookings
import Notification from "./components/Notification"; // Notification to show booking status

const App = () => {
  /*const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [notification, setNotification] = useState("");*/
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check admin login status

  // Handle seat click for booking
  // const handleSeatClick = (index) => {
  //   if (seats[index].status === "available") {
  //     setSelectedSeat(index);
  //     setIsModalOpen(true);
  //   } else {
  //     setNotification("This seat is already booked or pending.");
  //   }
  // };

  // Admin confirms the booking

  // Admin login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsAdmin(true); // Set the admin state to true after login
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

          {/* Admin Login */}
          <Route
            path="/adminlogin"
            element={<AdminLogin onLoginSuccess={handleLoginSuccess} />}
          />

          {/* Admin Login */}
          <Route
            path="/adminlogin"
            element={<AdminLogin onLoginSuccess={handleLoginSuccess} />}
          />

          {/* Admin Dashboard */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <>
                  <AdminPanel />
                  <Footer />
                </>
              ) : (
                <AdminLogin onLoginSuccess={handleLoginSuccess} />
              )
            }
          />

          {/* Apply for Performance */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

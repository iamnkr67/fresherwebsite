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
import BookSeatPage from "./components/BookSeat"; // Assuming BookSeat is inside pages/BookSeatPage
import LoginPage from "./components/Login";
import AdminLogin from "./components/AdminLogin";

const App = () => {
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
                  {/* <Workflow /> */}
                  {/* <Pricing /> */}
                  {/* <Testimonials /> */}
                  <ImageSlider />
                  <TimelineSection />
                  <Footer />
                </div>
              </>
            }
          />

          {/* Book Seat Page */}
          <Route
            path="/book-seat"
            element={
              <>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <BookSeatPage />
                </div>

                <Footer />
              </>
            }
          />
          {/* Login Page */}
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <LoginPage />
                </div>

                <Footer />
              </>
            }
          />

          {/* AdminLogin Page */}
          <Route
            path="/adminlogin"
            element={
              <>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <AdminLogin />
                </div>

                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

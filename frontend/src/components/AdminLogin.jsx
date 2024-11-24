import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Validate inputs
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      setError(""); // Clear any previous errors
      const response = await axios.post("http://localhost:3002/admin", {
        username,
        password,
      });

      if (response.status === 200) {
        setSuccess("Login successful!");
        console.log("Response Data:", response.data);

        // Notify parent about login success
        if (onLoginSuccess) onLoginSuccess();

        // Navigate to the dashboard
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(
        error.response?.data?.message || "An error occurred. Please try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr flex items-center justify-center p-4">
      <div className="bg-zinc-800 rounded-2xl mb-28 shadow-lg p-8 w-auto max-w-md text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-6">
          Admin
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Login
          </span>
        </h1>
        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-center mb-4 font-medium">
            {success}
          </p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.username}
              onChange={handleChange}
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-orange-400">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-orange-400">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 text-white font-semibold rounded-lg shadow-md transition duration-300 bg-gradient-to-r from-orange-500 to-red-800 hover:from-orange-200 hover:to-orange-800"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-zinc-400">
            Having trouble logging in?
            <a
              className="text-orange-400 hover:text-orange-500 font-medium transition duration-300"
              href="https://wa.me/+919835916976?text=admin+login+help"
            >
              <br />
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

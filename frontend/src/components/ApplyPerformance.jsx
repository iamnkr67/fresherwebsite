import React, { useState } from "react";
import axios from "axios"; // Import Axios

const ApplyPerformance = ({ isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    phone: "",
    year: "",
    act: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try {
      const response = await axios.post(
        "http://localhost:3002/contestant",
        formData,
      );

      if (response.status === 201) {
        setSuccess("Application submitted successfully!");
        setFormData({ name: "", rollNo: "", phone: "", year: "", act: "" });
        closeModal(); // Close the modal after success
      }
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(
          err.response.data.message ||
            "An error occurred while submitting your application.",
        );
      } else if (err.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      style={{ zIndex: 1000 }}
    >
      <div className="bg-zinc-800 p-6 rounded-lg w-96 max-w-md">
        <h2 className="text-xl font-semibold text-center text-white">
          Apply for Performance
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="rollNo"
              placeholder="Roll No (3 digits)"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="phone"
              placeholder="Phone (10 digits)"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="year"
              placeholder="Semester"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <select
              name="act"
              required
              className="block w-full px-4 py-3 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              value={formData.act}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose Your Act
              </option>
              <option value="dance">Dance</option>
              <option value="singing">Singing</option>
              <option value="instrumental music">Instrumental Music</option>
              <option value="drama">Drama</option>
              <option value="stand-up comedy">Stand-Up Comedy</option>
              <option value="others">Others</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 text-white font-semibold rounded-lg shadow-md transition duration-300 bg-gradient-to-r from-orange-500 to-red-800 hover:from-orange-200 hover:to-orange-800"
          >
            Submit Application
          </button>
        </form>

        {/* Modal Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyPerformance;

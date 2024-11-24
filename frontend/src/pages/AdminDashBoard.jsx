import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [contestants, setContestants] = useState([]);
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch contestants data
  const handleViewContestants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "http://localhost:3002/contestant/getdata",
      );
      setContestants(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch available seats
  const handleSeeSeatsAvailable = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3002/seats-available"); // Replace with your backend URL
      setSeats(response.data.data); // Assuming the API sends { data: [...] }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">Admin Controls</h1>

      <div className="space-y-4 mb-8">
        <button
          onClick={handleViewContestants}
          className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition duration-300"
        >
          View Contestants
        </button>
        <button
          onClick={handleSeeSeatsAvailable}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ml-4"
        >
          See Seats Available
        </button>
      </div>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Contestants Table */}
      {contestants.length > 0 && (
        <div className="w-full max-w-4xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contestants</h2>
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Roll No</th>
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Phone</th>
                <th className="border border-gray-600 px-4 py-2">Year</th>
                <th className="border border-gray-600 px-4 py-2">Act</th>
              </tr>
            </thead>
            <tbody>
              {contestants.map((contestant) => (
                <tr key={contestant.rollNo} className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-2">
                    {contestant.rollNo}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {contestant.name}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {contestant.phone}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {contestant.year}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {contestant.act}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Available Seats Table */}
      {seats.length > 0 && (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Available Seats</h2>
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">
                  Seat Number
                </th>
                <th className="border border-gray-600 px-4 py-2">Location</th>
                <th className="border border-gray-600 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {seats.map((seat) => (
                <tr key={seat._id} className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.seatNumber}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.location}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.available ? "Available" : "Booked"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

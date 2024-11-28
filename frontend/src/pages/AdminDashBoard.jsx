import React, { useState } from "react";
import { Settings } from "lucide-react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import { Download } from "lucide-react";

const AdminDashboard = () => {
  const [contestants, setContestants] = useState([]);
  const [seats, setSeats] = useState([]);
  const [approvedSeats, setApprovedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("none");
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogAction, setDialogAction] = useState(null);
  const [currentSeat, setCurrentSeat] = useState(null);

  // Fetch contestants data
  const handleViewContestants = async () => {
    setLoading(true);
    setError(null);
    setSeats([]);
    setViewMode("contestants");
    try {
      const response = await axios.get(
        "https://nalandafresher.onrender.com/contestant/getData",
      );
      setContestants(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const generateContestantsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Contestants List", 14, 20);

    const tableColumn = ["Roll No", "Name", "Phone", "Year", "Act"];
    const tableRows = [];

    contestants.forEach((contestant) => {
      const rowData = [
        contestant.rollNo,
        contestant.name,
        contestant.phone,
        contestant.year,
        contestant.act,
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("ContestantsList.pdf");
  };

  const generateApprovedSeatsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Approved Seats List", 14, 20);

    const tableColumn = ["Name", "Roll No", "Seat Number", "Semester"];
    const tableRows = [];

    approvedSeats.forEach((seat) => {
      const rowData = [seat.name, seat.rollNo, seat.seat, seat.semester];
      tableRows.push(rowData);
    });

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("ApprovedSeatsList.pdf");
  };

  // Fetch seats (pending and approved) based on status
  const handleSeats = async (status) => {
    setLoading(true);
    setError(null);
    setSeats([]);
    setApprovedSeats([]);
    setViewMode(status); // This will help toggle between pending and approved view

    try {
      const response = await axios.get(
        `https://nalandafresher.onrender.com/pending`,
        {
          params: { status }, // Sending the status to the backend
        },
      );
      const seats = response.data.data;
      setSeats(seats.filter((seat) => seat.status === "pending"));
      setApprovedSeats(seats.filter((seat) => seat.status === "approved")); // Approved seats
    } catch (err) {
      if (err.response && err.response.status === 400)
        setError("No seats are booked");
      else setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Open confirmation dialog
  const openConfirmationDialog = (seatId, action) => {
    setCurrentSeat(seatId);
    setDialogAction(action);
    setOpenDialog(true);
  };

  // Close confirmation dialog
  const closeConfirmationDialog = () => {
    setOpenDialog(false);
    setCurrentSeat(null);
    setDialogAction(null);
  };

  const handleApprove = async (seatId) => {
    try {
      const response = await axios.patch(
        `https://nalandafresher.onrender.com/pending/${seatId}`,
        { status: "approved" },
      );

      const seat = approvedSeats.find((seat) => seat._id === seatId);

      alert(response.data.message || "Seat approved successfully!");
      handleSeats("pending");
      handleSeats("approved");
      closeConfirmationDialog();
    } catch (error) {
      console.error("Error approving seat:", error);
      alert("Failed to approve the seat. Please try again.");
    }
  };

  // Reject seat
  const handleReject = async (seatId) => {
    try {
      const response = await axios.delete(
        `https://nalandafresher.onrender.com/pending/${seatId}`,
      );

      setSeats((prevSeats) => prevSeats.filter((seat) => seat._id !== seatId));
      alert(`Seat rejected successfully`);
      closeConfirmationDialog();
    } catch (error) {
      console.error("Error deleting seat:", error.message);
      alert("Failed to delete the seat. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="flex items-center space-x-4 mb-8 flex-nowrap">
        <Settings className="w-8 h-8 text-orange-500" />
        <h1 className="text-4xl font-bold whitespace-nowrap">Admin Controls</h1>
        <Settings className="w-8 h-8 text-orange-500" />
      </div>

      <div className="space-y-4 mb-8">
        <button
          onClick={handleViewContestants}
          className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition duration-300"
        >
          View Contestants
        </button>
        {viewMode === "contestants" && contestants.length > 0 && (
          <button
            onClick={generateContestantsPDF}
            className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition duration-300 ml-4"
          >
            Download Contestants PDF
          </button>
        )}
        <button
          onClick={() => handleSeats("pending")}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ml-4"
        >
          See Pending Seats
        </button>

        <button
          onClick={() => handleSeats("approved")}
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 transition duration-300 ml-4"
        >
          See Approved Seats
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {viewMode === "contestants" && contestants.length > 0 && (
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
      {viewMode === "pending" && (
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Pending Seat Requests</h2>
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Roll No</th>
                <th className="border border-gray-600 px-4 py-2">Semester</th>
                <th className="border border-gray-600 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {seats.map((seat) => (
                <tr key={seat._id} className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.name}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.rollNo}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.semester}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    <button
                      onClick={() => openConfirmationDialog(seat._id, "approve")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => openConfirmationDialog(seat._id, "reject")}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {viewMode === "approved" && (
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Approved Seat Requests</h2>
          {approvedSeats.length > 0 && (
            <button
              onClick={generateApprovedSeatsPDF}
              className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition duration-300 mb-4"
            >
              Approved PDF
            </button>
          )}
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Roll No</th>
                <th className="border border-gray-600 px-4 py-2">Semester</th>
                <th className="border border-gray-600 px-4 py-2">Seat No</th>
              </tr>
            </thead>
            <tbody>
              {approvedSeats.map((seat) => (
                <tr key={seat._id} className="bg-gray-700">
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.name}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.rollNo}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.semester}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {seat.seat}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {openDialog && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white text-black p-6 sm:p-8 rounded-lg">
            <p className="text-center">
              Are you sure you want to{" "}
              <strong>{dialogAction === "approve" ? "approve" : "reject"}</strong>{" "}
              this seat?
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={
                  dialogAction === "approve"
                    ? () => handleApprove(currentSeat)
                    : () => handleReject(currentSeat)
                }
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={closeConfirmationDialog}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

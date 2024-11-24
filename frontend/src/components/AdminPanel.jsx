// src/components/AdminPanel.jsx
import React, { useState } from "react";

const AdminPanel = ({ seats, onConfirm }) => {
  const [pendingBookings, setPendingBookings] = useState(
    seats.filter((seat) => seat.status === "pending"),
  );

  const handleConfirm = (index) => {
    onConfirm(index);
    setPendingBookings(pendingBookings.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <div className="space-y-4">
        {pendingBookings.map((seat, index) => (
          <div key={index} className="p-4 bg-yellow-300 rounded">
            <p>Seat {index + 1} - Pending</p>
            <button
              onClick={() => handleConfirm(index)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Confirm Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;

// src/components/Notification.jsx
import React from "react";

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 p-4 mt-4 w-90 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white text-center rounded`}
    >
      {message}
    </div>
  );
};

export default Notification;

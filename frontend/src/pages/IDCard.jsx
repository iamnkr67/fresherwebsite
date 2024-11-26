import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const IDCard = () => {
  const { id } = useParams();
  const [seat, setSeat] = useState(null);

  useEffect(() => {
    const fetchSeat = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/pending/${id}`);
        setSeat(response.data);
      } catch (error) {
        console.error("Failed to fetch seat data", error.message);
      }
    };

    fetchSeat();
  }, [id]);

  if (!seat) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center", border: "1px solid #ccc", maxWidth: "400px", margin: "auto" }}>
      <h2>ID Card</h2>
      <p><strong>Name:</strong> {seat.name}</p>
      <p><strong>Roll No:</strong> {seat.rollNo}</p>
      <p><strong>Semester:</strong> {seat.semester}</p>
      <p><strong>Seat No:</strong> {seat.seat}</p>
      <p><strong>Unique ID:</strong> {seat._id}</p>
    </div>
  );
};

export default IDCard;

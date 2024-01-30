import React, { useState } from 'react';

function SeatBooking({ seats }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = seatId => {
    // Check if the seat is already selected
    const isSeatSelected = selectedSeats.includes(seatId);

    // Toggle seat selection
    if (isSeatSelected) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = () => {
    // Logic to handle booking of selected seats
    console.log('Selected seats:', selectedSeats);
    // You can perform further actions here like sending a request to a server, etc.
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div className="seat-map">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatSelect(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <button onClick={handleBooking}>Book Selected Seats</button>
    </div>
  );
}

export default SeatBooking;

import React from "react";
import axios from 'axios';



const BookedSeats = () => {
  return (
    <div class="p-2 bg-gradient-to-b from-[#22130bfd] to-[#000000fd] min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-center text-2xl font-bold mb-4">
        <i class="fas fa-film"></i> &nbsp; Book Your Seats Now!
      </h1>
      <div class="rounded-lg w-60 h-16 mb-4 flex text-center font-bold items-center justify-center text-lg text-red-500 mx-0.5 border border-yellow-500">
        All eyes this way please!
      </div>
      <div class="w-full flex items-center justify-between mb-4 relative">
        <span class="text-blue-500 font-bold ml-4 mr-2 md:mx-auto">
          ← For boys
        </span>
        <span class="text-pink-500 font-bold ml-2 mr-4 md:mx-auto">
          For girls →
        </span>
      </div>
      <div class="scrollable-container w-full overflow-x-scroll mb-4 hidden">
        <div class="min-w-[800px]">
          <div class="grid grid-cols-12 gap-2">

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedSeats;

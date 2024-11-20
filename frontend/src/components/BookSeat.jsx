import React, { useState } from "react";
import bgvideo from "../assets/videoplayback.mp4";

const BookSeat = () => {
  return (
    <div class="p-2  min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-center text-2xl font-bold mb-4">
        <i class="fas fa-film"></i> &nbsp; Book Your Seats Now!
      </h1>
      <div class="rounded-lg w-60 h-16 mb-4 flex text-center font-bold items-center justify-center text-lg text-red-500 mx-0.5 border border-orange-500">
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
      <div class="scrollable-container w-full overflow-x-scroll mb-4">
        <div class="min-w-[800px]">
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  A10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  A9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  A8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  A7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  A6
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  A5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  A4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  A3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  A2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  A1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  B10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  B9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  B8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  B7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  B6
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  B5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  B4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  B3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  B2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  B1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C7
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  C1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D7
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  D2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  D1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E7
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  E1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F8
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  F1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  G14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  G11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G8
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  G7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  G3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  G1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H16
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  H15
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  H14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  H13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  H12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H9
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  H8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  H5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  H4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  H3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  H2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  H1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I16
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I15
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I9
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  I7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  I6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  I5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  I4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  I3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  I1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J16
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J15
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J9
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  J8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  J7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  J6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  J5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  J4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  J3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  J1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-2">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K18
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K17
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K16
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K15
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K10
                </div>
                <div class="w-14 flex items-center justify-center">
                  <div class="border-l-2 border-zinc-400 h-full"></div>{" "}
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  K7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-zinc-500 border border-purple-300">
                  K1
                </div>
              </div>
            </div>
            <div class="col-span-12 text-center text-white font-medium">
              Upper Floor Seats ↴
            </div>
            <div class="col-span-12 flex justify-center mb-4">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L17
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L16
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L15
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  L1
                </div>
              </div>
            </div>
            <div class="col-span-12 flex justify-center mb-4">
              <div class="flex items-center">
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M18
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M17
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M16
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M15
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M14
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M13
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M12
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M11
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M10
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M9
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M8
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M7
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M6
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M5
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M4
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M3
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 border border-purple-500 bg-transparent hover:bg-purple-500">
                  M2
                </div>
                <div class="rounded-md w-6 h-6 flex items-center justify-center cursor-pointer text-xs mx-0.5 bg-orange-600 text-white border border-purple-300">
                  M1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mb-2">
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 border border-purple-500 bg-transparent rounded mr-2"></div>
          <span>Available</span>
        </div>
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 bg-purple-500 rounded mr-2"></div>
          <span>Selected</span>
        </div>
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 bg-zinc-500 rounded mr-2"></div>
          <span>Booked</span>
        </div>
        <div class="flex items-center mr-4 mb-2">
          <div class="w-4 h-4 bg-orange-300 rounded mr-2"></div>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
};

export default BookSeat;

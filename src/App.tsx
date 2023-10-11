// src/App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import SpaceCard from "./components/SpaceCard";
import Chart from "./components/Chart";
import InputForm from "./components/InputForm";
import { calculatePotentialSavings } from "./utils/utils";

import {Space, mockListings, mockMarketRateData } from "./api/api"

function App() {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [userInput, setUserInput] = useState({
    type: "",
    size: 0,
    location: "",
  });

  useEffect(() => {
    const fetchSpaceData = async () => {
      try { 
        const filteredSpaces = mockListings.filter((space) => {
          const typeMatch =
            !userInput.type ||
            space.type.toLowerCase().includes(userInput.type.toLowerCase());
          const sizeMatch = userInput.size <= 0 || space.size >= userInput.size;
          const locationMatch =
            !userInput.location ||
            space.location
              .toLowerCase()
              .includes(userInput.location.toLowerCase());

          if (typeMatch && sizeMatch && locationMatch) {
            const marketRate = mockMarketRateData[space.type] || 0;
            const potentialSavings = calculatePotentialSavings(
              space.monthlyRent,
              marketRate
            );
            space.potentialSavings = potentialSavings;
            return true;
          }
          return false;
        });

        setSpaces(filteredSpaces);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSpaceData();
  }, [userInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold my-4">
        ShareRight Space Value Calculator
      </h1>
      
      <InputForm userInput={userInput} handleInputChange={handleInputChange} />

      <div className="">
        <Chart spaces={spaces} />
      </div>

      <div className="space-list text-start my-8">
        <div className="grid grid-cols-3 gap-4">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

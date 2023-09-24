import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://beta4.api.climatiq.io';
const API_KEY = 'YOUR_API_KEY';

const CarbonEmissionsCalculator = () => {
  const [travelMode, setTravelMode] = useState('car');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = async () => {
    const requestBody = {
      travel_mode: travelMode,
      origin: {
        query: origin,
      },
      destination: {
        query: destination,
      },
    };

    try {
      const response = await axios.post(`${BASE_URL}/travel/distance`, requestBody, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      setEmissions(response.data); // Assuming the API response contains the emissions data
    } catch (error) {
      console.error('Error fetching emissions data:', error);
    }
  };

  const handleCalculateClick = () => {
    calculateEmissions();
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Carbon Emissions Calculator</h2>
      <div className="mb-4">
        <label htmlFor="travelMode" className="block font-semibold">
          Travel Mode:
          <select
            id="travelMode"
            className="border rounded px-2 py-1"
            value={travelMode}
            onChange={(e) => setTravelMode(e.target.value)}
          >
            <option value="car">Car</option>
            <option value="air">Air</option>
            <option value="rail">Rail</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="origin" className="block font-semibold">
          Origin:
          <input
            type="text"
            id="origin"
            className="border rounded px-2 py-1"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="destination" className="block font-semibold">
          Destination:
          <input
            type="text"
            id="destination"
            className="border rounded px-2 py-1"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleCalculateClick}
      >
        Calculate Emissions
      </button>
      {emissions ? (
        <div className="mt-4">
          <p>Total Carbon Emissions: {emissions.co2e} {emissions.co2e_unit}</p>
          <p>Distance: {emissions.distance_km} km</p>
          {/* You can display more information here */}
        </div>
      ) : null}
    </div>
  );
};

export default CarbonEmissionsCalculator;

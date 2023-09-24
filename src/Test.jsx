import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    passengers: 1,
    class: 'economy',
  });
  const [emissionsData, setEmissionsData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Define your API endpoint and API key
    const apiUrl = 'https://beta3.api.climatiq.io/travel/flights';
    const apiKey = '45DGJ4YBJA426ZNCY5C2QWVFHFF1';

    // Make a POST request to the API using the user-provided data
    axios
      .post(
        apiUrl,
        {
          legs: [
            {
              from: formData.from,
              to: formData.to,
              passengers: parseInt(formData.passengers),
              class: formData.class,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        // Handle the API response and set the data in state
        setEmissionsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Flight Emissions Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">
            From
          </label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
            placeholder="Enter departure location"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">
            To
          </label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
            placeholder="Enter destination location"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">
            Passengers
          </label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="class" className="block text-sm font-medium text-gray-700">
            Class
          </label>
          <select
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
          >
            <option value="economy">Economy</option>
            <option value="first">First Class</option>
            {/* Add more class options as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Calculate Emissions
        </button>
      </form>
      {emissionsData && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Emissions Data</h2>
          <p>Total CO2e: {emissionsData.co2e} {emissionsData.co2e_unit}</p>
          <ul className="mt-2">
            {emissionsData.legs.map((leg, index) => (
              <li key={index}>
                <h3 className="text-lg font-semibold mb-1">Leg {index + 1}</h3>
                <p>CO2e: {leg.co2e} {leg.co2e_unit}</p>
                <p>Calculation Method: {leg.co2e_calculation_method}</p>
                <p>Calculation Origin: {leg.co2e_calculation_origin}</p>
                {/* Display other emissions data as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Test;

import React, { useState } from 'react';
import axios from 'axios';
import { FaCalculator, FaThumbsUp } from 'react-icons/fa';

const FlightEstimate = () => {
  const [formData, setFormData] = useState({
    iata_airport_from: '',
    iata_airport_to: '',
    number_of_passengers: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before making a new request
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set('iata_airport_from', formData.iata_airport_from);
      encodedParams.set('iata_airport_to', formData.iata_airport_to);
      encodedParams.set('number_of_passengers', formData.number_of_passengers);

      const options = {
        method: 'POST',
        url: 'https://carbonsutra1.p.rapidapi.com/flight_estimate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
          'X-RapidAPI-Key': 'e003362e7bmsh3bbb66c7edff81ap122171jsn748af86ffe2e',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com',
        },
        data: encodedParams,
      };

      const response = await axios.request(options);
      setResult(response.data.data);
      console.log(localStorage.getItem('MYuser'));
      const danwer=localStorage.getItem('MYuser')
 console.log(danwer);
     const answer= await axios.post(
        'http://localhost:5000/saveResult', // Update with your server URL
        { resultData: response.data.data ,id:danwer}, // Send the result data to be saved
      
      );
console.log(answer);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-4 rounded-md bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Flight Estimate</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">IATA Airport From</label>
            <input
              type="text"
              name="iata_airport_from"
              value={formData.iata_airport_from}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">IATA Airport To</label>
            <input
              type="text"
              name="iata_airport_to"
              value={formData.iata_airport_to}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Number of Passengers</label>
            <input
              type="number"
              name="number_of_passengers"
              value={formData.number_of_passengers}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Calculate
          </button>
        </form>
        {error && (
          <div className="border p-4 rounded-md bg-red-100 mb-4">
            <h2 className="text-lg font-semibold mb-2 text-red-500">Error</h2>
            <p>{error.message}</p>
          </div>
        )}
       {result && (
          <div className="border p-4 rounded-md bg-gray-100 mb-4">
            <h2 className="text-lg font-semibold mb-2">
              <FaCalculator className="text-blue-500 mr-2" />
              Result
            </h2>
            <div className="flex items-center mb-2">
              <FaCalculator className="text-blue-500 mr-2" />
              <p>CO2e Grams: {result.co2e_gm}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaCalculator className="text-blue-500 mr-2" />
              <p>CO2e Kilograms: {result.co2e_kg}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaCalculator className="text-blue-500 mr-2" />
              <p>CO2e Metric Tons: {result.co2e_mt}</p>
            </div>
            <div className="flex items-center">
              <FaCalculator className="text-blue-500 mr-2" />
              <p>CO2e Pounds: {result.co2e_lb}</p>
            </div>
          </div>
        )}
        {result && (
          <div className="border p-4 rounded-md bg-green-100">
            <h2 className="text-lg font-semibold mb-2">
              <FaThumbsUp className="text-green-500 mr-2" />
              Great news!
            </h2>
            <p>Your flight estimate is ready.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightEstimate;

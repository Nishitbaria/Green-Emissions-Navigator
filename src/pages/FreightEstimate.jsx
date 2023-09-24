import React, { useState } from 'react';
import axios from 'axios';
import { FaCalculator, FaThumbsUp } from 'react-icons/fa';

const FreightEstimate = () => {
  const [formData, setFormData] = useState({
    transport_mode: '',
    freight_weight: '',
    distance_value: '',
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
      const response = await axios.post(
        'https://carbonsutra1.p.rapidapi.com/freight_estimate',
        formData,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
            'X-RapidAPI-Key': 'e003362e7bmsh3bbb66c7edff81ap122171jsn748af86ffe2e',
            'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com',
          },
        }
      );
      console.log(response.data);
      setResult(response.data.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-4 rounded-md bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Freight Estimate</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Transport Mode</label>
            <input
              type="text"
              name="transport_mode"
              value={formData.transport_mode}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Freight Weight (in KG)</label>
            <input
              type="number"
              name="freight_weight"
              value={formData.freight_weight}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Distance Value</label>
            <input
              type="text"
              name="distance_value"
              value={formData.distance_value}
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
            <p>Your freight estimate is ready.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreightEstimate;

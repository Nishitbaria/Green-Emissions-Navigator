import React, { useState } from 'react';
import axios from 'axios';
import { FaCalculator, FaThumbsUp } from 'react-icons/fa';
import {BsFillFuelPumpFill} from 'react-icons/bs';

const FuelEstimate = () => {
  const [formData, setFormData] = useState({
    fuel_usage: 'commercial', // Default value as per your specification
    fuel_name: '',
    fuel_value: '',
    cluster_name: '', // Optional field
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
      encodedParams.set('fuel_usage', formData.fuel_usage);
      encodedParams.set('fuel_name', formData.fuel_name);
      encodedParams.set('fuel_value', formData.fuel_value);
      if (formData.cluster_name) {
        encodedParams.set('cluster_name', formData.cluster_name);
      }

      const options = {
        method: 'POST',
        url: 'https://carbonsutra1.p.rapidapi.com/fuel_estimate',
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
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex flex-col m-8 justify-center items-center h-screen">
      <div className="border p-4 rounded-md bg-white shadow-md w-screen">
        <h1 className="text-2xl font-bold mb-4">Fuel Estimate</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Fuel Usage</label>
            <select
              name="fuel_usage"
              value={formData.fuel_usage}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="transport">Transport</option>
              <option value="residential">Residential</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Fuel Name</label>
            <select
              name="fuel_name"
              value={formData.fuel_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Petrol">Petrol</option>
              <option value="Coal">Coal</option>
              <option value="Diesel">Diesel</option>
              <option value="LPG">LPG</option>
              <option value="Fuel Oils">Fuel Oils</option>
              <option value="Natural Gas">Natural Gas</option>
              <option value="Aviation Fuels">Aviation Fuels</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Fuel Value</label>
            <input
              type="number" // Assuming fuel_value is a number
              name="fuel_value"
              value={formData.fuel_value}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Cluster Name (Optional)</label>
            <input
              type="text"
              name="cluster_name"
              value={formData.cluster_name}
              onChange={handleChange}
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
            {/* Display result values here */}
          </div>
        )}
        {result && (
          <div className="border p-4 rounded-md bg-green-100">
            <h2 className="text-lg font-semibold mb-2">
              <FaThumbsUp className="text-green-500 mr-2" />
              Great news!
            </h2>
            <p>Your fuel estimate is ready.</p>
          </div>
        )}
      </div>
      {result && (
        <div className="flex space-x-4 mt-4">
          <div className="bg-blue-100 p-4 rounded-md">
            <FaCalculator className="text-blue-500 text-4xl" />
            <p>CO2e Grams: {result?.co2e_gm}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-md">
            <FaCalculator className="text-blue-500 text-4xl" />
            <p>CO2e Kilograms: {result?.co2e_kg}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-md">
            <FaCalculator className="text-blue-500 text-4xl" />
            <p>CO2e Metric Tons: {result?.co2e_mt}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-md">
            <FaCalculator className="text-blue-500 text-4xl" />
            <p>CO2e Pounds: {result?.co2e_lb}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuelEstimate;

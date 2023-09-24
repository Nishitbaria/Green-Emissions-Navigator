import React, { useState } from 'react';
import axios from 'axios';
import { FaCalculator, FaThumbsUp } from 'react-icons/fa';

const ECommerceShipmentEstimate = () => {
  const [formData, setFormData] = useState({
    origin_country_code: '',
    origin_postal_code: '',
    destination_country_code: '',
    destination_postal_code: '',
    package_weight: '',
    add_rf: 'N',
    include_wtt: 'N',
    cluster_name: '',
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
        'https://carbonsutra1.p.rapidapi.com/ecommerce_estimate',
        formData,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
            'X-RapidAPI-Key': '766964f085msh86eb00b9313f6fep152eddjsn79c70f439cb2',
            'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com',
          },
        }
      );
      setResult(response.data.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-4 rounded-md bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">ECommerce Shipment Estimate</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Origin Country Code</label>
            <input
              type="text"
              name="origin_country_code"
              value={formData.origin_country_code}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Origin Postal Code</label>
            <input
              type="text"
              name="origin_postal_code"
              value={formData.origin_postal_code}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Destination Country Code</label>
            <input
              type="text"
              name="destination_country_code"
              value={formData.destination_country_code}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Destination Postal Code</label>
            <input
              type="text"
              name="destination_postal_code"
              value={formData.destination_postal_code}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Package Weight (in KG)</label>
            <input
              type="number"
              name="package_weight"
              value={formData.package_weight}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Add Radiative Forcing (Y/N)</label>
            <select
              name="add_rf"
              value={formData.add_rf}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Include Well-to-Tank (Y/N)</label>
            <select
              name="include_wtt"
              value={formData.include_wtt}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
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
            <p>Your carbon footprint estimate is ready.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ECommerceShipmentEstimate;

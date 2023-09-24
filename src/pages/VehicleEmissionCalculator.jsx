import React, { useState } from 'react';
import axios from 'axios';
import { FaCar, FaGasPump, FaRoad, FaWeightHanging } from 'react-icons/fa';

const VehicleEmissionCalculator = () => {
  const [formData, setFormData] = useState({
    vehicle_type: 'Car-Type-Mini',
    fuel_type: 'Petrol',
    distance_value: '500',
    distance_unit: 'km',
    include_wtt: 'Y',
    cluster_name: '', // Added cluster_name as an optional input field
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
        'X-RapidAPI-Key': '766964f085msh86eb00b9313f6fep152eddjsn79c70f439cb2',
        'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com',
      },
      data: new URLSearchParams(formData).toString(),
    };

    try {
      const response = await axios.request(options);
      setResult(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 m-5">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <h1 className="text-2xl font-semibold mb-4">Vehicle Emission Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="vehicle_type">Vehicle Type:</label>
            <select
              name="vehicle_type"
              id="vehicle_type"
              value={formData.vehicle_type}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              {/* Add all vehicle types as options */}
              <option value="Car-Type-Mini">Car-Type-Mini</option>
              <option value="Car-Type-Mini">Car-Type-Mini</option>
              <option value="Car-Type-Supermini">Car-Type-Supermini</option>
              <option value="Car-Type-LowerMedium">Car-Type-LowerMedium</option>
              <option value="Car-Type-UpperMedium">Car-Type-UpperMedium</option>
              <option value="Car-Type-Executive">Car-Type-Executive</option>
              <option value="Car-Type-Luxury">Car-Type-Luxury</option>
              <option value="Car-Type-Sports">Car-Type-Sports</option>
              <option value="Car-Type-4x4">Car-Type-4x4</option>
              <option value="Car-Type-MPV">Car-Type-MPV</option>
              <option value="Car-Size-Small">Car-Size-Small</option>
              <option value="Car-Size-Medium">Car-Size-Medium</option>
              <option value="Car-Size-Large">Car-Size-Large</option>
              <option value="Car-Size-Average">Car-Size-Average</option>
              <option value="Motorbike-Size-Small">Motorbike-Size-Small</option>
              <option value="Motorbike-Size-Medium">Motorbike-Size-Medium</option>
              <option value="Motorbike-Size-Large">Motorbike-Size-Large</option>
              <option value="Motorbike-Size-Average">Motorbike-Size-Average</option>
              <option value="Bus-LocalAverage">Bus-LocalAverage</option>
              <option value="Bus-Coach">Bus-Coach</option>
              <option value="Taxi-Local">Taxi-Local</option>
              <option value="Train-National">Train-National</option>
              <option value="Train-Local">Train-Local</option>
              <option value="Train-Tram">Train-Tram</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="fuel_type">Fuel Type:</label>
            <select
              name="fuel_type"
              id="fuel_type"
              value={formData.fuel_type}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="distance_value">Distance Value:</label>
            <input
              type="number"
              name="distance_value"
              id="distance_value"
              value={formData.distance_value}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="distance_unit">Distance Unit:</label>
            <select
              name="distance_unit"
              id="distance_unit"
              value={formData.distance_unit}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="km">km</option>
              <option value="mi">mi</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="include_wtt">Include Well-To-Tank factor:</label>
            <select
              name="include_wtt"
              id="include_wtt"
              value={formData.include_wtt}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="Y">Yes</option>
              <option value="N">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="cluster_name">Cluster Name (Optional):</label>
            <input
              type="text"
              name="cluster_name"
              id="cluster_name"
              value={formData.cluster_name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Calculate
            </button>
          </div>
        </form>
        {result && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Result:</h2>
              <div className="flex flex-wrap justify-center">
                <div className="bg-white p-6 m-2 rounded-lg shadow-md border border-gray-300">
                  <div className="flex items-center justify-center">
                    <FaGasPump size={40} className="text-blue-500" /> {/* Gas Pump ReactIcon */}
                  </div>
                  <p>CO2e (grams): {result.co2e_gm}</p>
                </div>
                <div className="bg-white p-6 m-2 rounded-lg shadow-md border border-gray-300">
                  <div className="flex items-center justify-center">
                    <FaWeightHanging size={40} className="text-blue-500" /> {/* Weight Hanging ReactIcon */}
                  </div>
                  <p>CO2e (kilograms): {result.co2e_kg}</p>
                </div>
                <div className="bg-white p-6 m-2 rounded-lg shadow-md border border-gray-300">
                  <div className="flex items-center justify-center">
                    <FaWeightHanging size={40} className="text-blue-500" /> {/* Weight Hanging ReactIcon */}
                  </div>
                  <p>CO2e (metric tons): {result.co2e_mt}</p>
                </div>
                <div className="bg-white p-6 m-2 rounded-lg shadow-md border border-gray-300">
                  <div className="flex items-center justify-center">
                    <FaRoad size={40} className="text-blue-500" /> {/* Road ReactIcon */}
                  </div>
                  <p>CO2e (pounds): {result.co2e_lb}</p>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default VehicleEmissionCalculator;

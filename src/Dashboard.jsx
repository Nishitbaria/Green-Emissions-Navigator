import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import React from "react";

const Dashboard = () => {
  const auth = getAuth();
  const [ok, Setok] = useState(false);
  const [User, SetUser] = useState(null);
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const User = user;
        const userJSON = JSON.stringify(user);
        localStorage.setItem("MYuser", userJSON);
        SetUser(user);
        Setok(user);
      } else {
        Setok(false);
      }
    });
  }, []);
  useEffect(() => {
    // Replace 'yourResultID' with the actual result ID you want to fetch
    const resultID = localStorage.getItem("MYuser");

    fetch(`http://localhost:5000/getResult/${resultID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setReportData(data);
      })
      .catch((error) => {
        console.error("Error fetching result:", error);
      });
  }, [])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="w-full p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, {User?.email}!
          </h2>
        </div>

        {/* User-specific content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Dashboard Item 1 */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">
              Ecommerce Shipment Report
            </h2>
            <li className="bg-gray-100 p-4 rounded-md shadow-md">
    <h2 className="text-lg font-semibold">Report Data</h2>
 {reportData &&   <ul className="mt-2 space-y-1">
                <li>
                  <strong>CO2e Grams:</strong> {reportData.co2e_gm}
                </li>
                <li>
                  <strong>CO2e Kilograms:</strong> {reportData.co2e_kg}
                </li>
                <li>
                  <strong>CO2e Metric Tons:</strong> {reportData.co2e_mt}
                </li>
                <li>
                  <strong>CO2e Pounds:</strong> {reportData.co2e_lb}
                </li>
              </ul>}
  </li> 

          </div>

          {/* Dashboard Item 2 */}
     

          {/* Add more dashboard items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

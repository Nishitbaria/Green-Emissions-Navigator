import React from 'react'
import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Error from './pages/Error.jsx';
import Test from './Test.jsx';
import Navbar from './componets/common/Navbar.jsx';
import CarbonEmissionsCalculator from './pages/CarbonEmissionsCalculator.jsx';
import VehicleEmissionCalculator from './pages/VehicleEmissionCalculator.jsx';
import ECommerceShipmentEstimate from './pages/ECommerceShipmentEstimate.jsx';

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-white flex flex-col font-Serif">
    <Navbar />
   <Routes>
   
    <Route path="/" element={<HomePage />} />
    <Route path="/Test" element={<ECommerceShipmentEstimate />} />
    <Route path="*" element={<Error />} />
    </Routes>
    </div>
  )
}

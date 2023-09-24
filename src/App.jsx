import React from 'react'
import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Error from './pages/Error.jsx';
import Test from './Test.jsx';
import Navbar from './componets/common/Navbar.jsx';

import VehicleEmissionCalculator from './pages/VehicleEmissionCalculator.jsx';
import ECommerceShipmentEstimate from './pages/ECommerceShipmentEstimate.jsx';
import FreightEstimate from './pages/FreightEstimate.jsx';
import FlightEstimate from './pages/FlightEstimate.jsx';
import FuelEstimate from './pages/FuelEstimate.jsx';
import Footer from './componets/common/Footer.jsx';

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-white flex flex-col font-Serif">
    <Navbar />
   <Routes>
   
    <Route path="/" element={<HomePage />} />
    <Route path="/ECommerceShipmentEstimate" element={<ECommerceShipmentEstimate />} />
    <Route path="/VehicleEmissionCalculator" element={<VehicleEmissionCalculator />} />
    <Route path="/Freight" element={<FreightEstimate />} />
    <Route path="/Flight" element={<FlightEstimate />} />
    <Route path="/Fuel" element={<FuelEstimate />} />
    <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </div>
  )
}

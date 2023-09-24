import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa"; // Import the React Icons component
import { Link } from "react-router-dom";

const Cards = () => {
  const cardsData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3176/3176287.png",
      title: "ECommerce Shipment Estimate",
      description:
        "This advanced algorithm is designed to accurately estimate the emissions generated during a package's journey from its shipment location to the collection point. It operates by determining the distance between two postal codes and comparing it to a predefined threshold",
      link: "/ECommerceShipmentEstimate",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5121/5121145.png",
      title: "Flights Travel Estimate",
      description:
        "This calculation is used for reporting Scope 3 emissions for individuals flying for work purposes. The footprint of a flight travel is calculated based on the distance between airports and the travelling class of the passenger. With the origin and destination as inputs and following the ICAO methodology and EPA emissions factors, we apply appropriate rules based on research by IPCC.",
      link: "/Flight",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/465/465039.png",
      title: "Fuel Consumption Estimate",
      description:
        "This computes the emissions from stationary combustion fuels which are burnt in a fixed unit or asset owned or controlled by the reporting organization, and usually reported as a Scope 1 direct emission [1]. The source of data and methodology of emission factor calculation are from UK government's GHG conversion factors for company reporting and Ministry of Business, Innovation and Employment (MBIE)'s data of 2022 from New Zealand. All emissions are expressed as kg of CO2 equivalent per unit [2].",
      link: "/Fuel",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4662/4662012.png",
      title: "Vehicles Estimate by Model",
      description:
        "We calculate the footprint of a passenger vehicle based on its make and model, for a specific distance. For Scope 1, this should be used to report travel in vehicles that are owned or controlled by the reporting organization. If not owned/controlled by organization, the vehicle's emission is reported under Scope 3.",
      link: "/VehicleEmissionCalculator",
    },

    {
      icon: "https://cdn-icons-png.flaticon.com/512/9183/9183489.png",
      title: "Freight Shipping Estimate",
      description: `The freight/shipping emission estimations are for Road, Rail, Air and Sea (categorized into Short Sea and Deep Sea). Recommended average emission factors and guidelines have been used as proposed by member companies of ECTA (European Chemical Transport Association) and Cefic which are aligned with CN's recommendations. .​`,
      link: "/Freight",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-5 p-8">
      <h1 className="text-5xl font-bold text-gray-600 text-center mb-10">Carbon Footprint Calculator</h1>
      <div className="flex flex-row flex-wrap  md:grid-cols-2 gap-3">
        {cardsData.map((card, index) => (
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
          <img class="w-10 h-10 rounded" src={card.icon} alt="Default avatar"/>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {card.title}
          </h5>
          </div>
            
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {card.description}
            </p>
            <Link
              to={card.link}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Click Here to Calculate
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

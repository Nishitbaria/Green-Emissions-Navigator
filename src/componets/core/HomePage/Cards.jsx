import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa'; // Import the React Icons component

const Cards = () => {
  const cardsData = [
    {
      title: 'Measure',
      description:
        'Use our carbon footprint calculators for individuals, small businesses, charities, and churches.',
    },
    {
      title: 'Reduce',
      description: 'Learn more about how to reduce your carbon footprint.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Carbon Footprint Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-black p-6 flex flex-col justify-between h-[280px]"
          >
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                {/* Use the React Icon */}
                <FaHandHoldingHeart className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
              Find out more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

import React from 'react';
import { FaExclamationTriangle, FaTint, FaSun, FaWater } from 'react-icons/fa';

const mistakes = [
  {
    title: 'Overwatering',
    tip: 'The #1 killer of houseplants. Roots need oxygen as much as they need water. Soggy soil leads to root rot.',
    solution: 'Use the "finger test" - water only when the top 2 inches of soil are dry. Consider a moisture meter for accuracy.',
    icon: <FaTint className="text-blue-500" />,
    severity: 'High'
  },
  {
    title: 'Insufficient Light',
    tip: 'Plants can\'t photosynthesize properly in dark corners, leading to leggy growth and pale leaves.',
    solution: 'Research your plant\'s light needs. Use grow lights if natural light is limited. Rotate plants regularly.',
    icon: <FaSun className="text-yellow-500" />,
    severity: 'Medium'
  },
  {
    title: 'Poor Drainage',
    tip: 'Waterlogged soil suffocates roots and creates ideal conditions for fungal growth.',
    solution: 'Always use pots with drainage holes. Add perlite or orchid bark to improve soil aeration.',
    icon: <FaWater className="text-teal-500" />,
    severity: 'High'
  },
  {
    title: 'Ignoring Humidity',
    tip: 'Many tropical plants suffer in dry indoor air, leading to crispy leaf edges.',
    solution: 'Group plants together, use pebble trays, or invest in a humidifier for moisture-loving plants.',
    icon: <FaTint className="text-blue-300" />,
    severity: 'Medium'
  },
  {
    title: 'Overfertilizing',
    tip: 'Chemical burns from excess fertilizer can damage roots and cause leaf discoloration.',
    solution: 'Fertilize only during growing season (spring/summer) at half the recommended strength.',
    icon: <FaExclamationTriangle className="text-amber-500" />,
    severity: 'Medium'
  }
];

function TopPlantCareMistakes() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-700 mb-3 flex items-center justify-center gap-3">
            <FaExclamationTriangle className="text-red-600 animate-pulse" />
            Top Plant Care Mistakes
            <FaExclamationTriangle className="text-red-600 animate-pulse" />
          </h2>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">
            Avoid these common pitfalls that even experienced plant parents make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mistakes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-red-400"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-red-100 rounded-full mr-4">
                    {React.cloneElement(item.icon, { className: "text-2xl" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                      item.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.severity} Risk
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-red-700">⚠️ {item.tip}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 mb-1 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Solution:
                    </h4>
                    <p className="text-sm text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-red-200">
          <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
            <FaExclamationTriangle className="mr-2" />
            Pro Tip
          </h3>
          <p className="text-gray-700">
            When in doubt, it's better to underwater than overwater. Most plants recover more easily from drought than from root rot.
            Observe your plants regularly and adjust care as seasons change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TopPlantCareMistakes;
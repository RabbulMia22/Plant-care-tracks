import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaLeaf,
  FaTint,
  FaSun,
  FaHeartbeat,
  FaUser,
  FaEnvelope,
  FaCalendarAlt
} from 'react-icons/fa';

function PlantsDetails() {
  const plant = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/allplant" 
          className="inline-flex items-center text-green-700 hover:text-green-900 mb-6 font-medium transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to All Plants
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Plant Image */}
            <div className="md:w-2/5 bg-green-100 flex items-center justify-center p-8">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-64 object-contain rounded-lg transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Plant Details */}
            <div className="md:w-3/5 p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900 font-serif">{plant.plantName}</h2>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  <FaLeaf className="mr-1" />
                  {plant.category}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{plant.description}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaSun className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Care Level</h3>
                    <p className="text-gray-600">{plant.careLevel}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaTint className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Watering Frequency</h3>
                    <p className="text-gray-600">{plant.wateringFrequency}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaCalendarAlt className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Last Watered</h3>
                    <p className="text-gray-600">{plant.lastWateredDate}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaCalendarAlt className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Next Watering</h3>
                    <p className="text-gray-600">{plant.nextWateringDate}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaHeartbeat className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Health Status</h3>
                    <p className="text-gray-600">{plant.healthStatus}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <FaUser className="text-green-600 mr-2" />
                  Plant Owner
                </h4>
                <div className="flex items-center">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <FaUser className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">{plant.userName}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <FaEnvelope className="mr-1" />
                      {plant.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantsDetails;
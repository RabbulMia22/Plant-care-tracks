import React from 'react';
import { 
  FaLeaf, 
  FaRegCalendarAlt, 
  FaWater, 
  FaSun, 
  FaSeedling, 
  FaInstagram, 
  FaPinterest, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  const plantsNeedingCare = [
    { name: 'Monstera Deliciosa', careType: 'water', due: 'today' },
    { name: 'Snake Plant', careType: 'rotate', due: 'tomorrow' },
    { name: 'Pothos', careType: 'fertilize', due: 'in 3 days' }
  ];

  return (
    <footer className="bg-emerald-100 text-emerald-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Care Tracker */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 flex items-center text-emerald-800">
              <FaLeaf className="mr-2" /> My Plant Care Schedule
            </h3>
            
            <div className="bg-emerald-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-3 flex items-center text-emerald-700">
                <FaRegCalendarAlt className="mr-2" /> Upcoming Tasks
              </h4>
              
              <ul className="space-y-2">
                {plantsNeedingCare.map((plant, index) => (
                  <li key={index} className="flex items-center bg-emerald-300 p-2 rounded shadow-sm">
                    <span className="mr-2">
                      {plant.careType === 'water' ? <FaWater className="text-blue-500" /> : 
                       plant.careType === 'rotate' ? <FaSun className="text-yellow-500" /> : 
                       <FaSeedling className="text-green-600" />}
                    </span>
                    <span className="flex-1">{plant.name}</span>
                    <span className="text-sm bg-emerald-500 text-white px-2 py-1 rounded-full">
                      {plant.due}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white transition py-2 rounded-lg font-medium">
              View Full Schedule
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-800">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-600">Care Guides</a></li>
              <li><a href="#" className="hover:text-emerald-600">Plant Diagnosis</a></li>
              <li><a href="#" className="hover:text-emerald-600">Watering Calculator</a></li>
              <li><a href="#" className="hover:text-emerald-600">Repotting Tips</a></li>
            </ul>
          </div>

          {/* Social/Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-800">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-2xl hover:text-emerald-600"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-emerald-600"><FaPinterest /></a>
              <a href="#" className="text-2xl hover:text-emerald-600"><FaYoutube /></a>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-emerald-700">Get Plant Tips</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-gray-800 rounded-l focus:outline-none"
                />
                <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-r">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-emerald-300 mt-8 pt-6 text-center text-emerald-600">
          <p>© {new Date().getFullYear()} PlantCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function PlantCard() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then(res => res.json())
      .then(data => {
        setPlants(data);
      })
      .catch(err => console.error("Failed to fetch plants:", err));
  }, []);

  return (
    <div className="bg-green-50 py-10 px-4 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">🌿 Our Plant Collection</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-emerald-800 mb-1">{plant.name}</h3>
            <p className="text-sm text-gray-600 mb-2 italic">{plant.type}</p>
            <p className="text-gray-700">{plant.description?.slice(0, 80)}...</p>

            <button className="mt-4 bg-emerald-600 text-white py-1.5 px-4 rounded-full hover:bg-emerald-500 transition">
             <Link to={`/plant/${plant._id}`}>
              View Details
             </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantCard;

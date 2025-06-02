import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllPlants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://server-rust-kappa-39.vercel.app/plants")
      .then(res => res.json())
      .then(data => {
        setPlants(data);
      })
      .catch(err => console.error("Failed to fetch plants:", err));
  }, []);


  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Plants</h2>

      {plants.length === 0 ? (
        <p className="text-center text-gray-500">No plants available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Plant Name</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Watering Frequency</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant._id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src={plant.image}
                      alt={plant.plantName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4">{plant.plantName}</td>
                  <td className="px-6 py-4">{plant.category}</td>
                  <td className="px-6 py-4">{plant.wateringFrequency}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/plant/${plant._id}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AllPlants;

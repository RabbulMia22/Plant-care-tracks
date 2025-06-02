import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

function MyPlants() {
  const [myPlants, setMyPlants] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    if (!email) return;

    fetch(`http://localhost:3000/plants?email=${email}`)
      .then(res => res.json())
      .then(data => setMyPlants(data))
      .catch(err => console.error("Failed to load user plants", err));
  }, [email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myPlants.filter((plant) => plant._id !== id);
              setMyPlants(remaining);
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Plants</h2>
      {myPlants.length === 0 ? (
        <p className="text-gray-600">You haven't added any plants yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Watering</th>
                <th className="p-2 border">Last Watered</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPlants.map(plant => (
                <tr key={plant._id}>
                  <td className="p-2 border">
                    <img src={plant.image} alt={plant.name} className="h-12 w-12 object-cover rounded" />
                  </td>
                  <td className="p-2 border">{plant.plantName}</td>
                  <td className="p-2 border">{plant.category}</td>
                  <td className="p-2 border">{plant.wateringFrequency}</td>
                  <td className="p-2 border">{plant.lastWatered}</td>
                  <td className="p-2 border space-x-2">
                    <Link to={`/update/${plant._id}`}>
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                        Update
                      </button>
                    </Link>
                    <button 
                      onClick={() => handleDelete(plant._id)} 
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
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

export default MyPlants;

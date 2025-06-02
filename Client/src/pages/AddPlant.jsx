import React from 'react';
import Swal from 'sweetalert2';

function AddPlant() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());
    console.log(plantData);

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plantData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-6">Add New Plant</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input name="image" type="text" className="w-full border px-3 py-2 rounded" placeholder="https://..." />
        </div>

        <div>
          <label className="block font-medium mb-1">Plant Name</label>
          <input name="plantName" type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select name="category" className="w-full border px-3 py-2 rounded">
            <option>Select Category</option>
            <option>Succulent</option>
            <option>Fern</option>
            <option>Flowering</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea name="description" rows="3" className="w-full border px-3 py-2 rounded"></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Care Level</label>
          <select name="careLevel" className="w-full border px-3 py-2 rounded">
            <option>Select Care Level</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Watering Frequency</label>
          <input name="wateringFrequency" type="text" className="w-full border px-3 py-2 rounded" placeholder="e.g., Every 3 days" />
        </div>

        <div>
          <label className="block font-medium mb-1">Last Watered Date</label>
          <input name="lastWatered" type="date" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">Next Watering Date</label>
          <input name="nextWatering" type="date" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">Health Status</label>
          <input name="healthStatus" type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input name="email" type="email" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">User Name</label>
          <input name="userName" type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Add Plant
        </button>
      </form>
    </div>

  );
}

export default AddPlant;
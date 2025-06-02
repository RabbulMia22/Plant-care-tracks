import React from 'react'
import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2';

function Update() {
    const plant = useLoaderData();
     const {_id, image, plantName, category, description, careLevel, wateringFrequency, lastWatered, nextWatering, healthStatus, userName} = plant;

   const handleUpdatePlant = (e) => {
       e.preventDefault();
       const form = e.target;
       const formData = new FormData(form);
       const updatedPlant = Object.fromEntries(formData.entries());
       console.log(updatedPlant);
       
       fetch(`http://localhost:3000/plants/${_id}`, {
          method: "PATCH",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(updatedPlant)
       })
         .then(res => res.json())
         .then(data => {
           if (data.modifiedCount > 0) {
             Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Your work has been saved",
               showConfirmButton: false,
               timer: 1500
             });
             form.reset();
           }
         })
   
     }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-6">Update New Plant</h2>
      <form className="space-y-4" onSubmit={handleUpdatePlant}>
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input name="image" defaultValue={image} type="text" className="w-full border px-3 py-2 rounded" placeholder="https://..." />
        </div>

        <div>
          <label className="block font-medium mb-1">Plant Name</label>
          <input name="plantName" defaultValue={plantName} type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select name="category" defaultValue={category} className="w-full border px-3 py-2 rounded">
            <option>Select Category</option>
            <option>Succulent</option>
            <option>Fern</option>
            <option>Flowering</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea name="description" defaultValue={description} rows="3" className="w-full border px-3 py-2 rounded"></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Care Level</label>
          <select name="careLevel" defaultValue={careLevel} className="w-full border px-3 py-2 rounded">
            <option>Select Care Level</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Watering Frequency</label>
          <input name="wateringFrequency" defaultValue={wateringFrequency} type="text" className="w-full border px-3 py-2 rounded" placeholder="e.g., Every 3 days" />
        </div>

        <div>
          <label className="block font-medium mb-1">Last Watered Date</label>
          <input name="lastWatered" defaultValue={lastWatered} type="date" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">Next Watering Date</label>
          <input name="nextWatering" defaultValue={nextWatering} type="date" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">Health Status</label>
          <input name="healthStatus" defaultValue={healthStatus} type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input name="email" type="email" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium mb-1">User Name</label>
          <input name="userName" defaultValue={userName} type="text" className="w-full border px-3 py-2 rounded" />
        </div>

        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Update Plant
        </button>
      </form>
    </div>
  )
}

export default Update
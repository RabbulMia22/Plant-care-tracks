import React from 'react';

const beginnerPlants = [
  {
    name: 'Snake Plant',
    image: 'https://www.marthastewart.com/thmb/IJw4H5lyXQmgTZtLyqnr3uwCQQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eight-houseplants-that-thrive-in-low-light-8-0922-2000-39845777816b4f1f8a49b6ef758ef35e.jpg',
    description: 'Thrives in low light and requires minimal watering. Perfect for beginners and busy plant parents.',
    careTips: ['Water every 2-3 weeks', 'Low to bright indirect light', 'Pet-friendly']
  },
  {
    name: 'Golden Pothos',
    image: 'https://nouveauraw.com/wp-content/uploads/2020/01/Pothos-Golden-Pothos-plant-FF.png',
    description: 'Fast-growing vine that purifies air and adapts to various lighting conditions.',
    careTips: ['Water when soil is dry', 'Any light except direct sun', 'Easy to propagate']
  },
  {
    name: 'Spider Plant',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAiTbtu0YickO5WgVZbKFiKltM1tm11AYTsRxjLxf2bQ9gz939irJ-4h-uzkDzxXe0n6f5qfLcA3UHpPxwdQC9Q',
    description: 'Produces adorable baby plants (spiderettes) that you can share with friends.',
    careTips: ['Keep soil slightly moist', 'Bright indirect light', 'Non-toxic to pets']
  },
  {
    name: 'ZZ Plant',
    image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enolMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Glossy leaves and drought-tolerant nature make it ideal for forgetful waterers.',
    careTips: ['Water every 3-4 weeks', 'Low light tolerant', 'Slow grower']
  },
  {
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2UlMjBsaWx5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'Beautiful white blooms and dramatic leaves that tell you when it needs water.',
    careTips: ['Water when leaves droop', 'Medium indirect light', 'Loves humidity']
  },
  {
    name: 'Aloe Vera',
    image: 'https://vgrgardens.com/wp-content/uploads/2024/09/Aloevera-Copy.jpg',
    description: 'Healing gel inside leaves and thrives with minimal care.',
    careTips: ['Water deeply but infrequently', 'Bright light preferred', 'Medicinal properties']
  }
];

function BeginnerFriendlyPlants() {
  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-800 mb-3">
            🌱 Beginner-Friendly Houseplants
          </h2>
          <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
            These easy-care plants are perfect for new plant parents and thrive with minimal attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beginnerPlants.map((plant, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{plant.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{plant.description}</p>
                
                <div className="border-t border-emerald-100 pt-4">
                  <h4 className="font-semibold text-emerald-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Care Tips
                  </h4>
                  <ul className="space-y-1">
                    {plant.careTips.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 mt-0.5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200">
            View More Easy-Care Plants
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default BeginnerFriendlyPlants;
import React from 'react'
import BannerSlider from '../components/Slider/BannerSlider'

import BeginnerFriendlyPlants from '../components/BeginnerFriendlyPlants/BeginnerFriendlyPlants'
import TopPlantCareMistakes from '../components/TopPlantCareMistakes/TopPlantCareMistakes'
import PlantCard from '../components/PlantCard/PlantCard'

function Home() {
  return (
    <div>
      <BannerSlider />
      <PlantCard />
      <BeginnerFriendlyPlants />
      <TopPlantCareMistakes />
    </div>
  )
}

export default Home
import React from 'react'
import Carousel from '../components/slide/Carousel'
import HomeMarathon from '../components/HomeMarathon'
import UpcomingMarathons from '../components/UpcomingMarathons'

export default function Home() {
  return (
    <div>
        <Carousel/>
        <HomeMarathon/>
        <UpcomingMarathons/>
    </div>
  )
}

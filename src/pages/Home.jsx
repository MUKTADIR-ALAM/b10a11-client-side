import React from 'react'
import Carousel from '../components/slide/Carousel'
import HomeMarathon from '../components/HomeMarathon'
import UpcomingMarathons from '../components/UpcomingMarathons'
import Accordion from '../components/Accordion'
import Feedback from '../components/Feedback'
import Sponcer from '../components/Sponcer'

export default function Home() {
  return (
    <div>
        <Carousel/>
        <HomeMarathon/>
        <Sponcer/>
        <UpcomingMarathons/>
        <Feedback/>
        <Accordion/>
    </div>
  )
}

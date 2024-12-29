import React from 'react'
import Carousel from '../components/slide/Carousel'
import HomeMarathon from '../components/HomeMarathon'
import UpcomingMarathons from '../components/UpcomingMarathons'
import Accordion from '../components/Accordion'
import Feedback from '../components/Feedback'
import Sponcer from '../components/Sponcer'
import {Helmet} from "react-helmet";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Runner</title>
    </Helmet>
        <Carousel/>
        <HomeMarathon/>
        <Sponcer/>
        <UpcomingMarathons/>
        <Feedback/>
        <Accordion/>
    </div>
  )
}

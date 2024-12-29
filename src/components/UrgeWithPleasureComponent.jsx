import { differenceInSeconds } from 'date-fns'
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function UrgeWithPleasureComponent({marathon_start}) {

    const remainingSeconds = differenceInSeconds(
        new Date(marathon_start),
        new Date()
      )
      const renderTime = ({ remainingTime }) => {
        const days = Math.floor(remainingTime / (24 * 3600))
        const hours = Math.floor((remainingTime % (24 * 3600)) / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)

        return (
            <div className="text-center flex gap-3">
                <div className="text-xl">{days}d</div>
                <div className="text-lg">{hours}h</div>
                <div>{minutes}m</div>
            </div>
        )
    }
  return (
    <CountdownCircleTimer
    isPlaying
    duration={remainingSeconds}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[remainingSeconds, remainingSeconds * 0.7, remainingSeconds * 0.3, 0]}
    size={150}
  >
    {renderTime}
  </CountdownCircleTimer>
  )
}

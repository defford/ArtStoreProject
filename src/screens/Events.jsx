import React from 'react'
import Event from './Event.jsx'
import eventsData from '../data/eventsData.json'

const Events = () => {
  return (
    <div className="eventsList">
      
      {eventsData.map((event) => (
          <Event
          key={event.id}
          id={event.id}
          date={event.date}
          title={event.title}
          description={event.description}
          location={event.location}
          time={event.time}
          />
          ))}
    </div>
  )
}

export default Events
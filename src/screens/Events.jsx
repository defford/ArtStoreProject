import React from 'react'
import Event from './Event.jsx'
import eventsData from '../data/eventsData.json'

const Events = () => {
  return (
    <div className="eventsSection">
      <div className="eventsHeader">
        <h1>Events</h1>
        <h3>Where and when art is being passed on in Newfoundland</h3>
        <p>Join us at craft fairs, markets, and art festivals where Elizabeth showcases her work and connects with the community. We host interactive events, including online and in-person painting classes, workshops, and artist meetups. Whether you're an aspiring artist, a professional, or simply love local art, there’s a place for you.</p>
      </div>

      <div className="eventsListSection">
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

      </div>
      
    </div>
  )
}

export default Events
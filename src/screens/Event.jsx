import React from 'react'

const Event = ({ date, title, description, location, time }) => {
  
    const eDate = new Date(date);
    const day = eDate.getDate();
    const month = eDate.toLocaleString('default', { month: 'short' });

    return (
    <div className="eventContainer">
        <div className="eventDate">
            <h1>{day}</h1>
            <p>{month}</p>
        </div>
        <div className="eventText">
            <h1>{title}</h1>
            <p>{description}, {location}, {time}</p>
            <div className="eventTime">
                <img src="src/assets/location_on.png" height="15px" width="auto" alt="Event" />
                <p>{location}</p>
                <img src="src/assets/Clock.png" height="15px" width="auto" alt="Event" />
                <p>{time}</p>
            </div>
        </div>
    </div>
  )
}

export default Event
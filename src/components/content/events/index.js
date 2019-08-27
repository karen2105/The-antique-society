import React from 'react';
import { EVENTS } from '@/constants/home';

function eventsContent() {
  let content = [];
  content.push(EVENTS.map((event, index) => (
      <div className="event-container" key={index}>
        <h3 className="date">
          <span className="day">{event.day} </span>
          <span className="month">{event.month}</span> / 
          <span className="year">{event.year}</span>
        </h3>
        <h3>{event.name}</h3>
        <p>{event.short_description}</p> 
        <button>Event details</button>
      </div>
  )));

  return content;
};

const Events = () => {

  return (
    <div className="antiques-top-events-wrapper">
        {eventsContent()}
    </div>
  );
}

export default Events;
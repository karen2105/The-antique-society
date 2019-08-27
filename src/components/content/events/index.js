import React from 'react';
import { EVENTS } from '@/constants/home';

function eventsContent() {
  let content = [];

  content.push(EVENTS.map((event, index) => {
    const classForContainer = 
      index === 1 ? 
      "event-container" 
      : "event-container d-none d-md-block";

      return (
        <div className={classForContainer} key={index}>
          <h3 className="date">
            <span className="day">{event.day}<sup>{event.ord_end}</sup> </span>
            <span className="month">{event.month} / </span>
            <span className="year">{event.year}</span>
          </h3>
          <h3 className="event-name">{event.name}</h3>
          <p className="event-description">{event.short_description}</p> 
          <button className="button-information">Event details    ></button>
        </div>
      );
  }));

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
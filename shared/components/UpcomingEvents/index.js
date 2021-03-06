import React, { PropTypes } from 'react';
import UpcomingEvent from '../UpcomingEvent';

const UpcomingEvents = ({ upcomingEvents }) => (
  <section className="UpcomingEvents block">
    <div className="content">
      <h2>Upcoming Events</h2>
    </div>
    <div className="content space-between UpcomingEvents__events">
      {upcomingEvents && upcomingEvents.map((event, index) => (
        <UpcomingEvent {...event} key={index} />
      ))}
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.arrayOf(PropTypes.shape(UpcomingEvent.propTypes)),
};

export default UpcomingEvents;

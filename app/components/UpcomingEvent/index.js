import React, { PropTypes } from 'react';

const UpcomingEvent = ({ venue, time, date, title, key }) => (
  <article className="UpcomingEvent" {...key}>
    <h3>{title}</h3>
    <ul className="UpcomingEvent__details semantic-only">
      <li className="UpcomingEvent__details--date">
        <a>{date}</a>
      </li>
      <li className="UpcomingEvent__details--location">
        <a>{venue}</a>
      </li>
      <li className="UpcomingEvent__details--time">
        <a>{time}</a>
      </li>
    </ul>
  </article>
);

UpcomingEvent.propTypes = {
  venue: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.number,
};


export default UpcomingEvent;

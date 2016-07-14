import React, { PropTypes } from 'react';

const calendarURL = 'https://calendar.google.com/calendar/event?action=TEMPLATE' +
  '&tmeid=NWY0cDE3Y3N0MzZhbWp2amxmdjhkdHBqbGsgbG5kaDVzdXRrbmtyZjZpbjEzYWgzYmUwbW9AZw' +
  '&tmsrc=lndh5sutknkrf6in13ah3be0mo%40group.calendar.google.com';

const locationURL = 'https://goo.gl/maps/Z8SU87i4Fy42';

const NextCommunityEvent = ({
  eventTitle,
  eventDate,
  eventAddress,
  eventStartTime,
  eventEndTime,
}) => (
  <section className="NextCommunityEvent block">
    <div className="content">
      <h2 className="NextCommunityEvent__header">Next Event</h2>
      <article className="NextCommunityEvent__section-container">
        <div className="NextCommunityEvent__section NextCommunityEvent__section__details">
          <h3 className="NextCommunityEvent__details__heading">{eventTitle}</h3>
          <ul className="NextCommunityEvent__details">
            <li>
              <a
                className="NextCommunityEvent__link--date"
                href={calendarURL}
                target="_blank"
              >
                {eventDate}
              </a>
            </li>
            <li>
              <a
                className="NextCommunityEvent__link--time"
                href={calendarURL}
                target="_blank"
              >
                {eventStartTime} - {eventEndTime}
              </a>
            </li>
            <li>
              <a
                className="NextCommunityEvent__link--place"
                href={locationURL}
                target="_blank"
              >
                {eventAddress}
              </a>
            </li>
          </ul>
        </div>
        <div className="NextCommunityEvent__section NextCommunityEvent__section__booking">
          <h3 className="NextCommunityEvent__booking__heading">TICKETS NOW SOLD OUT</h3>
          <div className="NextCommunityEvent__booking-btn__container">
            <a
              className="NextCommunityEvent__booking-btn NextCommunityEvent__booking-btn--active"
              href="https://skillsmatter.com/meetups/8306-react-graphql-and-relay-in-practice-and-draft-js-in-the-real-world"
            >
              Join waiting list
            </a>
          </div>
          <p className="NextCommunityEvent__live-stream-text">
            To get reminders about tickets and future
            events <a className="NextCommunityEvent__live-stream-text--link" href="#stay-tuned">
            subscribe here</a>
          </p>

        </div>
      </article>
    </div>
  </section>
);

NextCommunityEvent.propTypes = {
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventAddress: PropTypes.string,
  eventStartTime: PropTypes.string,
  eventEndTime: PropTypes.string,
};

export default NextCommunityEvent;

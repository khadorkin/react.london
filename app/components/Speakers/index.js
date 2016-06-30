import React, { PropTypes } from 'react';
import Speaker from '../Speaker';

const Speakers = ({ eventSpeakers }) => (
  <section className="Speakers block">
    <div className="content">
      <h2 className="Speakers__header">Speakers</h2>
    </div>
    <div className="Speakers__container content">

      {eventSpeakers && eventSpeakers.map((props, index) => (
        <Speaker key={index} {...props} />
      ))}

    </div>
  </section>

);

Speakers.propTypes = {
  eventSpeakers: PropTypes.arrayOf(React.PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    talkTitle: PropTypes.string,
    talkSummary: PropTypes.string,
    twitterHandle: PropTypes.string,
    githubHandle: PropTypes.string,
    blogURL: PropTypes.string,
  })),
};


export default Speakers;

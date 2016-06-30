import React, { PropTypes } from 'react';
import SiteFooter from '../SiteFooter';
import Speakers from '../Speakers';
import EventSchedule from '../EventSchedule';
import Sponsor from '../Sponsor';
import Hero from '../Hero';
import RedBadgerBanner from '../RedBadgerBanner';
import NavigationBar from '../NavigationBar';
import CommunityAbout from '../CommunityAbout';
import NextEvent from '../NextEvent';
import MailingList from '../MailingList';
import UpcomingEvents from '../UpcomingEvents';
import JoinSlack from '../JoinSlack';

const Community = ({
  communitySummary,
  mailingListTitle,
  mailingListSummary,
  eventTitle,
  eventDate,
  eventAddress,
  eventStartTime,
  eventEndTime,
  eventSpeakers,
  eventSchedule,
  eventSponsors,
  upcomingEvents,
}) => (
  <div className="community">
    <div id="wrapper">
      <main>
        <Hero />
        <RedBadgerBanner />
        <NavigationBar />
        <CommunityAbout communitySummary={communitySummary} />
        <NextEvent
          eventTitle={eventTitle}
          eventDate={eventDate}
          eventAddress={eventAddress}
          eventStartTime={eventStartTime}
          eventEndTime={eventEndTime}
        />

        <Speakers eventSpeakers={eventSpeakers} />

        <MailingList
          mailingListTitle={mailingListTitle}
          mailingListSummary={mailingListSummary}
        />


        <section className="block">
          <div className="content space-between">

            <EventSchedule eventSchedule={eventSchedule} />

            {/* SPONSORS */}
            <article className="EventSponsors">
              <h3>Sponsors</h3>
              <ul>
                {eventSponsors && eventSponsors.map((props, index) => (
                  <Sponsor key={index} {...props} />
                ))}
              </ul>
            </article>

          </div>
        </section>

      </main>

      <UpcomingEvents upcomingEvents={upcomingEvents} />

      <JoinSlack />

      <SiteFooter />
    </div>
  </div>
);

Community.propTypes = {
  communitySummary: PropTypes.string,
  mailingListTitle: PropTypes.string,
  mailingListSummary: PropTypes.string,
  eventTitle: PropTypes.string,
  eventAddress: PropTypes.string,
  eventDate: PropTypes.string,
  eventStartTime: PropTypes.string,
  eventEndTime: PropTypes.string,
  eventSpeakers: PropTypes.array,
  eventSchedule: PropTypes.array,
  eventSponsors: PropTypes.array,
  upcomingEvents: PropTypes.array,
};

export default Community;

import { connect } from 'react-redux';

import UpcomingMeetupComponent from '../components/UpcomingMeetup/UpcomingMeetup.js';

const mapStateToProps = (state) => ({
  ...state.userTexts,
});

export default connect(mapStateToProps, null)(UpcomingMeetupComponent);

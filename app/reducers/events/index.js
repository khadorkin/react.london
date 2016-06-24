import { SET_EVENTS, UPDATE_EVENT } from '../../actions/community_events';
import { SITE_STATE_LOADED } from '../../actions/persistence';

export default function events(state = {}, action) {
  switch (action.type) {
    case UPDATE_EVENT:
      return {
        ...state,
        [action.eventID]: action.event,
      };

    case SET_EVENTS:
      return action.events;

    case SITE_STATE_LOADED:
      return action.events;

    default:
      return state;
  }
}

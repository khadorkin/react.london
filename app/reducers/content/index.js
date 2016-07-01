import { CONTENT_UPDATE, TOGGLE_EDITING } from '../../actions/content';

export default function content(state = { exampleinput: 'hi', currentlyEditing: false }, action) {
  switch (action.type) {

    case CONTENT_UPDATE: {
      const newState = { ...state };
      newState[action.field] = action.content;
      return newState;
    }
    case TOGGLE_EDITING: {
      const newState = !state.currentlyEditing
      return {
        ...state,
        currentlyEditing: newState,
      };
    }
    default: {
      return state;
    }
  }
}

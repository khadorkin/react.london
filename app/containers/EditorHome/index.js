import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateContent, toggleEditing } from '../../actions/content';
import EditorHome from '../../components/EditorHome';

export const mapStateToProps = (state) => {
  const eventIDs = Object.keys(state.events);
  return {
    eventIDs,
    ...state.content,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateContent, toggleEditing }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorHome);

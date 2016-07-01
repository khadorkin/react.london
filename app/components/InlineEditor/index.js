import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const InlineEditor = ({ currentlyEditing, fieldValue, onClick, onChange }) => {
  if(currentlyEditing) {
    return <input
      type="text"
      name="exampleinput"
      value={fieldValue}
      onChange={onChange}
    />
  } else {
    return <h1 id="fieldValue" onClick={onClick}>{fieldValue}</h1>
  }
};

InlineEditor.propTypes = {
  currentlyEditing: PropTypes.bool,
  fieldValue: PropTypes.string,
};

export default InlineEditor;

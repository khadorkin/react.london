export const CONTENT_UPDATE = 'CONTENT_UPDATE';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';

export function updateContent(field, content) {
  return {
    type: CONTENT_UPDATE,
    field,
    content,
  };
}

export function toggleEditing() {
  return {
    type: TOGGLE_EDITING,
  };
}

export const UPDATE_TEXT = 'UPDATE_TEXT';

export function updateText(textInput) {
  return {
    type: UPDATE_TEXT,
    textInput
  };
}
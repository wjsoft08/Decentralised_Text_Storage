
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          saved: false
        }
      ]
    case 'TOGGLE_SAVE_ASYNC':
      return state.map(text =>
        (text.id === action.id)
          ? {...text, saved: !text.saved}
          : text
      )
    default:
      return state
  }
}

export default reducer;

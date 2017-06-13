// ------------------------------------
// Constants
// ------------------------------------
export const LANGUAGE_FETCH = 'LANGUAGE_FETCH'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchLanguages () {
  return {
    type    : LANGUAGE_FETCH,
    payload : 'C#'
  }
}

export const actions = {
  fetchLanguages
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LANGUAGE_FETCH]    : (state, action) => { return (action.payload) }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ''
export default function langugeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

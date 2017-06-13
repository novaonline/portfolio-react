// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_NAV = 'TOGGLE_NAV'

// ------------------------------------
// Actions
// ------------------------------------
export function toggle () {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_NAV,
      payload: getState().layout.isOpen // might need a better name like .navIsOpen
    })
  }
}

export const actions = {
  toggle,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_NAV]: (state, action) => ({ ...state, isOpen: !action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isOpen: false
}
export default function pageLayoutReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

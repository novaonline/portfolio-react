import { getFromLocalStorage, saveToLocalStorage, LAYOUT } from '../../../utilities/postActions/localStorage'

// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_NAV = 'TOGGLE_NAV'
export const SUBMIT_NAME = 'SUBMIT_NAME'
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

export function toggleOnNavClick () {
  return (dispatch, getState) => {
    if (window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
      dispatch({
        type: TOGGLE_NAV,
        payload: getState().layout.isOpen // might need a better name like .navIsOpen
      })
    }
  }
}

export const submitName = (name) => ({
  type: SUBMIT_NAME,
  payload: name,
})

export const actions = {
  toggle,
  toggleOnNavClick,
  submitName,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_NAV]: (state, action) => ({ ...state, isOpen: !action.payload }),
  [SUBMIT_NAME]: (state, action) => ({ ...state, name: action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
let initialState = {
  isOpen: false,
  name: null,
}
const storage = getFromLocalStorage(LAYOUT)
if (storage) {
  initialState = storage
}

export default function pageLayoutReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  const result = handler ? handler(state, action) : state
  saveToLocalStorage(LAYOUT, result)
  return result
}

import {
  getFromLocalStorage,
  saveToLocalStorage,
  EXPERIENCE_HIGHLIGHTED,
}
  from '../../../utilities/postActions/localStorage'

export const SELECT_EXPERIENCE = 'SELECT_EXPERIENCE'
export const DESELECT_EXPERIENCE = 'DESELECT_EXPERIENCE'

const selectExperience = (id, groupName) => ({
  type: SELECT_EXPERIENCE,
  selectionId: id,
  groupName: groupName,
})
const deselectExperience = (id, groupName) => ({
  type: DESELECT_EXPERIENCE,
  selectionId: id,
  groupName: groupName,
})
export const toggleSelectionAsync = (id, groupName) => {
  return (dispatch, getState) => {
    const selectedData = getState().highlightedExperiences.data[`${id}_${groupName}`]
    if (selectedData) {
      dispatch(deselectExperience(id, groupName))
    } else {
      dispatch(selectExperience(id, groupName))
    }
  }
}
const ACTION_HANDLERS = {
  [SELECT_EXPERIENCE]: (state, action) => { // is this state a clone already?
    const data = Object.assign({}, state.data)
    data[`${action.selectionId}_${action.groupName}`] = { id: action.selectionId, groupName: action.groupName }
    return (
      Object.assign({}, state, {
        data: data,
      })
    )
  },
  [DESELECT_EXPERIENCE]: (state, action) => {
    const data = Object.assign({}, state.data)
    delete data[`${action.selectionId}_${action.groupName}`]
    return (
      Object.assign({}, state, {
        data: data,
      })
    )
  }
}

let initialState = {
  data: []
}
const storage = getFromLocalStorage(EXPERIENCE_HIGHLIGHTED)
if (storage) { // NOTE: this is dependant on other data
  initialState = storage
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  const result = handler ? handler(state, action) : state
  saveToLocalStorage(EXPERIENCE_HIGHLIGHTED, result)
  return result
}

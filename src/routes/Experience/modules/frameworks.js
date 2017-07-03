import request from 'superagent'
import {
  getFromLocalStorage,
  saveToLocalStorage,
  EXPERIENCE_FRAMEWORKS,
}
  from '../../../utilities/postActions/localStorage'

export const FETCH_FRAMEWORK_REQUEST = 'FETCH_FRAMEWORK_REQUEST'
export const FETCH_FRAMEWORK_FAILURE = 'FETCH_FRAMEWORK_FAILURE'
export const FETCH_FRAMEWORK_SUCCESSFUL = 'FETCH_FRAMEWORK_SUCCESSFUL'

export const QUERY_FRAMEWORK_REQUEST = 'QUERY_FRAMEWORK_REQUEST'
export const QUERY_FRAMEWORK_SUCCESSFUL = 'QUERY_FRAMEWORK_SUCCESSFUL'
export const QUERY_FRAMEWORK_FAILURE = 'QUERY_FRAMEWORK_FAILURE'
export const QUERY_FRAMEWORK_CLEAR = 'QUERY_FRAMEWORK_CLEAR'

// FETCH FRAMEWORK
export const requestFramework = () => ({ type: FETCH_FRAMEWORK_REQUEST, })
export const receiveFramework = (json) => ({
  type: FETCH_FRAMEWORK_SUCCESSFUL,
  data: json,
  receivedAt: Date.now(),
})
export const errorSend = (err) => ({
  type: FETCH_FRAMEWORK_FAILURE,
  error: err,
})
export const fetchFrameworksAsync = () => { // create helper for api
  return (dispatch, getState) => {
    dispatch(requestFramework())
    return request('/api/frameworks', (err, res) => {
      if (err) dispatch(errorSend(err))
      dispatch(receiveFramework(JSON.parse(res.body)))
    })
  }
}

// QUERY FRAMEWORK
export const queryFrameworkRequest = (searchTerm) => ({
  type: QUERY_FRAMEWORK_REQUEST,
  searchTerm: searchTerm,
})
export const queryFrameworkReceive = (data, searchTerm) => ({
  type: QUERY_FRAMEWORK_SUCCESSFUL,
  data: data,
  searchTerm: searchTerm,
})
export const queryFrameworkClear = () => ({
  type: QUERY_FRAMEWORK_CLEAR,
  data: null,
  searchTerm: null,
})
export const queryFrameworks = (e) => { // create helper for queries
  return (dispatch, getState) => {
    const { value } = e.target
    if (value.length > 0) {
      dispatch(queryFrameworkRequest(value))
      const data = getState().frameworks.data.filter(
        x => x.title.toLowerCase().includes(
          value.toLowerCase()
        )
      )
      dispatch(queryFrameworkReceive(data, value))
    } else {
      dispatch(queryFrameworkClear())
    }
  }
}

// ACTION HANDLERS
const ACTION_HANDLERS = {
  [FETCH_FRAMEWORK_REQUEST]: (state, action) => Object.assign({}, state, {
    isFetching: true,
  }),
  [FETCH_FRAMEWORK_FAILURE]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    error: action.error,
  }),
  [FETCH_FRAMEWORK_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    data: action.data,
    lastUpdated: action.receivedAt,
  }),
  [QUERY_FRAMEWORK_REQUEST]: (state, action) => ({
    ...state,
    ...{
      isQuerying: true, searchTerm: action.searchTerm,
    }
  }), // https://github.com/tc39/proposal-object-rest-spread
  [QUERY_FRAMEWORK_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isQuerying: false,
    filteredData: action.data,
    searchTerm: action.searchTerm,
  }),
  [QUERY_FRAMEWORK_CLEAR]: (state, action) => Object.assign({}, state, {
    isQuerying: false,
    filteredData: action.data,
    searchTerm: action.searchTerm,
  }),
}
let initialState = {
  isFetching: true,
  data: [],
  searchTerm: null,
  isQuerying: false,
  filteredData: null,
}
const storage = getFromLocalStorage(EXPERIENCE_FRAMEWORKS)
if (storage) {
  initialState = storage
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  const result = handler ? handler(state, action) : state
  saveToLocalStorage(EXPERIENCE_FRAMEWORKS, result)
  return result
}

import request from 'superagent'
import {
  getFromLocalStorage,
  saveToLocalStorage,
  EXPERIENCE_LANGUAGE,
}
  from '../../../utilities/postActions/localStorage'
import { FAILURE_PATTERN } from '../../../utilities/regexPatterns'

// actions
export const FETCH_LANGUAGE_REQUEST = 'FETCH_LANGUAGE_REQUEST'
export const FETCH_LANGUAGE_FAILURE = 'FETCH_LANGUAGE_FAILURE'
export const FETCH_LANGUAGE_SUCCESSFUL = 'FETCH_LANGUAGE_SUCCESSFUL'

export const QUERY_LANGUAGE_REQUEST = 'QUERY_LANGUAGE_REQUEST'
export const QUERY_LANGUAGE_FAILURE = 'QUERY_LANGUAGE_FAILURE'
export const QUERY_LANGUAGE_SUCCESSFUL = 'QUERY_LANGUAGE_SUCCESSFUL'
export const QUERY_LANGUAGE_CLEAR = 'QUERY_LANGUAGE_CLEAR'

// LANGUAGE FETCH ACTIONS
export const requestLanguage = () => ({ type: FETCH_LANGUAGE_REQUEST, })
export const sendError = (err) => ({
  type: FETCH_LANGUAGE_FAILURE,
  error: err,
})
export const receiveLanguage = (json) => ({
  type: FETCH_LANGUAGE_SUCCESSFUL,
  data: json,
  receivedAt: Date.now()
})
export const fetchLanguagesAsync = () => {
  return (dispatch, getState) => {
    dispatch(requestLanguage())
    return request('http://equagraineapi.azurewebsites.net/api/languages', (error, response) => {
      if (error) {
        dispatch(sendError(error))
      } else {
        var data = response.body
        var storeData = {}
        if (data) {
          data.forEach((element) => {
            storeData['id-' + element.id] = element
          })
        }
        dispatch(receiveLanguage(storeData))
      }
    })
  }
}
// LANGUAGE QUERY ACTIONS
export const queryLanguageRequest = (searchTerm) => ({
  type: QUERY_LANGUAGE_REQUEST,
  searchTerm: searchTerm,
})
// not sure if we should be recording the search term
export const queryLanguageReceive = (data, searchTerm) => ({
  type: QUERY_LANGUAGE_SUCCESSFUL,
  data: data,
  searchTerm: searchTerm,
})
export const queryLanguageClear = () => ({
  type: QUERY_LANGUAGE_CLEAR,
  data: null,
  searchTerm: null,
})
export const queryLanguages = (e) => {
  return (dispatch, getState) => {
    const { value } = e.target
    if (value.length > 0) {
      dispatch(queryLanguageRequest(value))
      const s = getState().languages.data
      const dataIdx = Object.keys(s).filter(
        x => s[x].title.toLowerCase().includes(
          value.toLowerCase()
        )
      )
      const data = dataIdx.map(x => s[x])
      dispatch(queryLanguageReceive(data, value))
    } else {
      dispatch(queryLanguageClear())
    }
  }
}
// ACTION HANDLERS
const ACTION_HANDLER = {
  [FETCH_LANGUAGE_REQUEST]: (state, action) => Object.assign({}, state, {
    isFetching: true,
    error: null,
  }),
  [FETCH_LANGUAGE_FAILURE]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    error: action.error,
  }),
  [FETCH_LANGUAGE_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    error: null,
    data: action.data,
    lastUpdated: action.receivedAt,
  }),
  [QUERY_LANGUAGE_REQUEST]: (state, action) => Object.assign({}, state, {
    isQuerying: true,
    searchTerm: action.searchTerm,
  }),
  [QUERY_LANGUAGE_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isQuerying: false,
    error: null,
    filteredData: action.data,
    searchTerm: action.searchTerm,
  }),
  [QUERY_LANGUAGE_CLEAR]: (state, action) => Object.assign({}, state, {
    isQuerying: false,
    error: null,
    filteredData: action.data,
    searchTerm: action.searchTerm,
  })
}
let initialState = {
  isFetching: true,
  error: null,
  data: null,
  searchTerm: null,
  isQuerying: false,
  filteredData: null,
}
const storage = getFromLocalStorage(EXPERIENCE_LANGUAGE)
if (storage) { // NOTE: this is dependant on other data
  initialState = storage
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type]
  const result = handler ? handler(state, action) : state
  if (!(new RegExp(FAILURE_PATTERN).test(action.type))) {
    saveToLocalStorage(EXPERIENCE_LANGUAGE, result)
  }
  return result
}

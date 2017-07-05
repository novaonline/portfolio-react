import request from 'superagent'
import { getFromLocalStorage, saveToLocalStorage, EDUCATION } from '../../../utilities/postActions/localStorage'
import { FAILURE_PATTERN } from '../../../utilities/regexPatterns'
export const FETCH_EDUCATION_REQUEST = 'FETCH_EDUCATION_REQUEST'
export const FETCH_EDUCATION_FAILURE = 'FETCH_EDUCATION_FAILURE'
export const FETCH_EDUCATION_SUCCESSFUL = 'FETCH_EDUCATION_SUCCESSFUL'

export const requestEducation = () => {
  return {
    type: FETCH_EDUCATION_REQUEST
  }
}

export const sendError = (err) => ({
  type: FETCH_EDUCATION_FAILURE,
  error: err,
})

export const receiveEducation = (json) => {
  return {
    type: FETCH_EDUCATION_SUCCESSFUL,
    data: json,
    receivedAt: Date.now() // will have to turn into utc if not already
  }
}

export const fetchEducation = () => {
  return (dispatch) => {
    dispatch(requestEducation())
    return new Promise((resolve) => {
      request.get('/api/content/2').end((error, response) => {
        if (error) {
          dispatch(sendError(error))
          console.error(error)
        }
        const data = JSON.parse(response.body)
        const resp = data
        dispatch(receiveEducation(resp))
      })
      resolve()
    })
  }
}

export const actions = {
  requestEducation,
  receiveEducation,
  fetchEducation,
}

const ACTION_HANDLERS = {
  [FETCH_EDUCATION_REQUEST]: (state, action) => Object.assign({}, state, {
    isFetching: true,
    error: null,
  }),
  [FETCH_EDUCATION_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    data: action.data,
    error: null,
    lastUpdated: action.receivedAt,
  }),
  [FETCH_EDUCATION_FAILURE]: (state, action) => Object.assign({},
  state,
    {
      isFetching: false,
      error: action.error,
    }
  )
}

let initialState = {
  isFetching: true,
  error: null,
  data: null,
}

const storage = getFromLocalStorage(EDUCATION)
if (storage) {
  initialState = storage
}

export default function educationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  const result = handler ? handler(state, action) : state
  if (!(new RegExp(FAILURE_PATTERN).test(action.type))) {
    saveToLocalStorage(EDUCATION, result)
  }
  return result
}

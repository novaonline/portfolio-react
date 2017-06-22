import request from 'superagent'

export const FETCH_EDUCATION_REQUEST = 'FETCH_EDUCATION_REQUEST'
export const FETCH_EDUCATION_FAILURE = 'FETCH_EDUCATION_FAILURE'
export const FETCH_EDUCATION_SUCCESSFUL = 'FETCH_EDUCATION_SUCCESSFUL'

export const requestEducation = () => {
  return {
    type: FETCH_EDUCATION_REQUEST
  }
}

export const recieveEducation = (json) => {
  return {
    type: FETCH_EDUCATION_SUCCESSFUL,
    educationContent: json,
    recievedAt: Date.now() // will have to turn into utc if not already
  }
}

export const fetchEducation = () => {
  return (dispatch) => {
    dispatch(requestEducation())
    return new Promise((resolve) => {
      request.get('/api/content/2').end((error, response) => {
        if (error) {
          console.error(error)
        }
        const data = JSON.parse(response.body)
        const resp = data
        dispatch(recieveEducation(resp))
      })
      resolve()
    })
  }
}

export const actions = {
  requestEducation,
  recieveEducation,
  fetchEducation,
}

const ACTION_HANDLERS = {
  [FETCH_EDUCATION_REQUEST]: (state, action) => Object.assign({}, state, {
    isFetching: true
  }),
  [FETCH_EDUCATION_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    educationContent: action.educationContent,
    lastUpdated: action.recievedAt,
  }),
}

const initialState = {
  isFetching: true,
  educationContent: null,
}
export default function educationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

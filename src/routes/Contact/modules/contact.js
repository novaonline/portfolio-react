import request from 'superagent'

// create actions
export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST'
export const FETCH_CONTACT_SUCCESSFUL = 'FETCH_CONTACT_SUCCESSFUL'
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE'

// create synchronous actions
export const requestContact = () => {
  return {
    type: FETCH_CONTACT_REQUEST,
  }
}

export const sendError = (err) => {
  return {
    type: FETCH_CONTACT_FAILURE,
    error: err,
  }
}

export const receiveContact = (json) => {
  return {
    type: FETCH_CONTACT_SUCCESSFUL,
    contactContent: json,
    receivedAt: Date.now()
  }
}

// create asynchronous actions
export const fetchContactAsync = () => {
  return (dispatch) => {
    dispatch(requestContact())
    return request('/api/content/6').end((err, res) => {
      if (err) {
        dispatch(sendError(err))
      }
      const allData = JSON.parse(res.body)
      const data = allData
      dispatch(receiveContact(data))
    })
  }
}

export const actions = {
  requestContact,
  receiveContact,
  fetchContactAsync,
}

// create action handler
const ACTION_HANDLERS_MAPPING = {
  [FETCH_CONTACT_REQUEST]: (state, action) => Object.assign({}, state, {
    isFetching: true,
  }),
  [FETCH_CONTACT_FAILURE]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    error: action.error,
  }),
  [FETCH_CONTACT_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    data: action.contactContent,
    lastUpdated: action.receivedAt,
  }),
}

// initial state
const initialState = {
  isFetching: true,
  data: null,
}
// create the contact reducer
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS_MAPPING[action.type]
  return handler ? handler(state, action) : state
}

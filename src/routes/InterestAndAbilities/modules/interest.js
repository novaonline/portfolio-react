import req from 'superagent'
// create actions
export const FETCH_INTEREST_PENDING = 'FETCH_INTEREST_PENDING'
export const FETCH_INTEREST_SUCCESSFUL = 'FETCH_INTEREST_SUCCESSFUL'
export const FETCH_INTEREST_FAILURE = 'FETCH_INTEREST_FAILURE'

// create synchronous actions
export const requestInterest = () => ({
  type: FETCH_INTEREST_PENDING
})

export const receiveInterest = (json) => ({
  type: FETCH_INTEREST_SUCCESSFUL,
  data: json,
  receiveAt: Date.now()
})

export const sendError = (err) => (
  {
    type: FETCH_INTEREST_FAILURE,
    error: err,
  }
)

export const fetchInterestAsync = () => {
  return (dispatch) => {
    dispatch(requestInterest())
    return (
      req('/api/content/3').end((err, res) => {
        if (err) {
          dispatch(sendError(err))
        }
        var allData = JSON.parse(res.body)
        var data = allData
        dispatch(receiveInterest(data))
      })
    )
  }
}

export const actions = {
  requestInterest,
  receiveInterest,
  fetchInterestAsync,
}

const ACTION_HANDLER_MAPPING = {
  [FETCH_INTEREST_PENDING]: (state, action) => Object.assign({}, state, {
    isFetching: true,
  }),
  [FETCH_INTEREST_FAILURE]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    error: action.error
  }),
  [FETCH_INTEREST_SUCCESSFUL]: (state, action) => Object.assign({}, state, {
    isFetching: false,
    data: action.data,
    lastUpdated: action.receiveAt,
  })
}

const initialState = {
  isFetching: true,
  data: null,
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLER_MAPPING[action.type]
  return handler ? handler(state, action) : state
}

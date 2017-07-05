import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'
const ErrorAlert = ({ error }) => {
  return (
    <div>
      {
        error && (
          <Alert color='danger'>
            <strong>Oh snap!</strong> Something went wrong ({error.response && error.response.statusText}).
          </Alert>
        )
      }
    </div>
  )
}

ErrorAlert.propTypes = {
  error: PropTypes.object,
}

export default ErrorAlert

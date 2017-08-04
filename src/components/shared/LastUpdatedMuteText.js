import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
const LastUpdatedMuteText = ({ lastUpdated, refreshTrigger }) => {
  return (
    <Row className='mb-5 pb-3'>
      <Col>
        <small
          role='button'
          onClick={refreshTrigger}
          className='text-muted'>
          Last updated at {new Date(lastUpdated).toLocaleDateString()} {' '}
          {new Date(lastUpdated).toLocaleTimeString()}. Click here to refresh.
    </small>
      </Col>
    </Row>
  )
}

LastUpdatedMuteText.propTypes = {
  lastUpdated: PropTypes.number,
  refreshTrigger: PropTypes.func.isRequired,
}

export default LastUpdatedMuteText

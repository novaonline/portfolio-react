import React from 'react'
import { Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap'
import { Link } from 'react-router'

import PropTypes from 'prop-types'

const PaginationItems = ({ prevLink, nextLink }) => {
  return (
    <Row>
      <Col>
        <Pagination className='justify-content-center' size='lg'>
          {prevLink && (
            <PaginationItem>
              <PaginationLink disabled={!prevLink} to={prevLink} tag={Link} previous />
            </PaginationItem>
          )}
          {
            nextLink && (
              <PaginationItem>
                <PaginationLink disabled={!nextLink} to={nextLink} tag={Link} next />
              </PaginationItem>
            )
          }
        </Pagination>
      </Col>
    </Row>
  )
}

PaginationItems.propTypes = {
  prevLink: PropTypes.string,
  nextLink: PropTypes.string,
}

PaginationItems.defaultProps = {
  prevLink: null,
  nextLink: null,
}

export default PaginationItems

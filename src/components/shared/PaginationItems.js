import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const PaginationItems = ({ prevLink, nextLink }) => {
  return (
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

import React, { Component } from 'react'
import './ContactView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

class ContactView extends Component {
  componentDidMount = () => !this.props.data && this.props.fetchContactAsync()
  render = () => {
    const { data, isFetching, fetchContactAsync } = this.props
    return (
      <div onClick={fetchContactAsync}>
        {isFetching && (<div>Loading...</div>)}
        {!isFetching && (
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div id={data.htmlId} className='content'>
                  {data.sections.map(section => (
                    <section key={section.id}>
                      <h2>{section.info.meta}</h2>
                      <div dangerouslySetInnerHTML={{ __html: section.info.body }} />
                    </section>
                  ))}
                </div>
                <div className='text-center'>
                  <Link to='/projects'>
                    <Button color='link'>&laquo; Projects</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

ContactView.propTypes = {
  data: PropTypes.shape({
    htmlId: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        info: PropTypes.shape({
          meta: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }),
  isFetching: PropTypes.bool.isRequired,
  fetchContactAsync: PropTypes.func.isRequired,
}

ContactView.defaultProps = {
  data: null,
  isFetching: true,
  fetchContactAsync: () => { },
}

export default ContactView

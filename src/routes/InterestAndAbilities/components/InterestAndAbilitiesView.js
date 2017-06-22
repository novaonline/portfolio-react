import React, { Component } from 'react'
import './InterestAndAbilitiesView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import { PropTypes } from 'prop-types'

class InterestAndAbilities extends Component {
  componentDidMount = () => !this.props.data && this.props.fetchInterestAsync()
  render = () => {
    const { isFetching, data, fetchInterestAsync } = this.props
    return (
      <div onClick={fetchInterestAsync}>
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
                  <Link to='/'>
                    <Button color='link'>&laquo; Introduction</Button>
                  </Link>
                  <Link to='/education'>
                    <Button color='link'>Education &raquo;</Button>
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

InterestAndAbilities.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    htmlId: PropTypes.string,
    info: PropTypes.shape({
      header: PropTypes.string.isRequired,
      backgroundUrl: PropTypes.string.isRequired,
    }),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        info: PropTypes.shape({
          meta: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }),
      }),
    ),
  }),
  fetchInterestAsync: PropTypes.func.isRequired,
}

InterestAndAbilities.defaultProps = {
  isFetching: true,
  data: null,
}

export default InterestAndAbilities

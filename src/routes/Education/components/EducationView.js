import React, { Component } from 'react'
import './EducationView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

class EducationView extends Component {
  componentDidMount = () => !this.props.educationContent && this.props.fetchEducation()
  render = () => {
    const { isFetching, educationContent, fetchEducation } = this.props
    return (
      <div>
        {isFetching && (<div>Loading...</div>)}
        {!isFetching &&
          (
            <div onClick={fetchEducation} className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div id={educationContent.htmlId} className='content'>
                    {educationContent.sections.map(section => (
                      <section key={section.id}>
                        <h2>{section.info.meta}</h2>
                        <div className='body' dangerouslySetInnerHTML={{ __html: section.info.body }} />
                      </section>
                    ))}
                    <div className='text-center'>
                      <Link to='/interests'>
                        <Button color='link'>&laquo; Interests</Button>
                      </Link>
                      <Link to='/experiences'>
                        <Button color='link'>Experience &raquo;</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    )
  }
}
EducationView.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  educationContent: PropTypes.shape({
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
  fetchEducation: PropTypes.func.isRequired,
}

EducationView.defaultProps = {
  isFetching: true,
  educationContent: null,
}

export default EducationView

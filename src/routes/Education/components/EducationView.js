import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './EducationView.scss'
import PropTypes from 'prop-types'
import PaginationItems from '../../../components/shared/PaginationItems'
import ScrollToTop from '../../../layouts/PageLayout/components/ScrollToTop'
import Loading from '../../../components/shared/Loading'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class EducationView extends Component {
  componentDidMount = () => !this.props.educationContent && this.props.fetchEducation()
  render = () => {
    const { isFetching, educationContent } = this.props
    return (
      <Container>
        <ScrollToTop />
        <Row>
          <Col sm='12'>
            <ReactCSSTransitionGroup transitionName='animatedContent'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {isFetching && (<Loading />)}
              {!isFetching &&
                (

                  <div id={educationContent.htmlId} className='content'>
                    {educationContent.sections.map(section => (
                      <section key={section.id}>
                        <h2>{section.info.meta}</h2>
                        <div className='body' dangerouslySetInnerHTML={{ __html: section.info.body }} />
                      </section>
                    ))}
                  </div>

                )}
            </ReactCSSTransitionGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <PaginationItems prevLink='/interests' nextLink='/contact' />
          </Col>
        </Row>
      </Container>
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

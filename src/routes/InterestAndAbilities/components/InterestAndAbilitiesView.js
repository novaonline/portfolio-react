import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './InterestAndAbilitiesView.scss'
import { PropTypes } from 'prop-types'
import PaginationItems from '../../../components/shared/PaginationItems'
import LastUpdatedMuteText from '../../../components/shared/LastUpdatedMuteText'
import ErrorAlert from '../../../components/shared/ErrorAlert'
import ScrollToTop from '../../../layouts/PageLayout/components/ScrollToTop'
import Loading from '../../../components/shared/Loading'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class InterestAndAbilities extends Component {
  componentDidMount = () => !this.props.data && this.props.fetchInterestAsync()
  render = () => {
    const { isFetching, data, error, lastUpdated, fetchInterestAsync } = this.props
    return (
      <div>
        <ScrollToTop />
        <Container>
          <ErrorAlert error={error} />
          <Row>
            <Col>
              <ReactCSSTransitionGroup transitionName='animatedContent'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {isFetching && (<Loading />)}
                {!isFetching && data && (
                  <div id={data.htmlId} className='content'>
                    {data.sections.map(section => (
                      <section key={section.id}>
                        <h2>{section.info.meta}</h2>
                        <div dangerouslySetInnerHTML={{ __html: section.info.body }} />
                      </section>
                    ))}
                  </div>
                )}
              </ReactCSSTransitionGroup>
            </Col>
          </Row>
          <LastUpdatedMuteText refreshTrigger={fetchInterestAsync} lastUpdated={lastUpdated} />
          <PaginationItems prevLink='/experiences' nextLink='/education' />
        </Container>
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
  error: PropTypes.object,
  lastUpdated: PropTypes.number,
}

InterestAndAbilities.defaultProps = {
  isFetching: true,
  data: null,
}

export default InterestAndAbilities

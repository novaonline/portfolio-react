import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Alert } from 'reactstrap'
import './ExperienceView.scss'
import PropTypes from 'prop-types'
import CardGroup from './CardGroup'
import { cardItemPropType } from '../../../utilities/propTypes'
import PaginationItems from '../../../components/shared/PaginationItems'
import LastUpdatedMuteText from '../../../components/shared/LastUpdatedMuteText'
import ErrorAlert from '../../../components/shared/ErrorAlert'
import ScrollToTop from '../../../layouts/PageLayout/components/ScrollToTop'
import Loading from '../../../components/shared/Loading'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ExperienceView extends Component {
  componentDidMount = () => {
    !this.props.languageData && this.props.fetchLanguagesAsync()
    !this.props.frameworkData && this.props.fetchFrameworksAsync()
  }
  render = () => {
    const {
      fetchLanguagesAsync,
      languageData,
      isFetchingLanguages,
      queryLanguages,
      filteredLanguageData,
      isQueryingLanguages,
      languageSearchTerm,
      fetchFrameworksAsync,
      frameworkData,
      isFetchingFrameworks,
      queryFrameworks,
      filteredFrameworkData,
      isQueryingFrameworks,
      frameworkSearchTerm,
      toggleSelectionAsync,
      languageGeneralError,
      frameworkGeneralError,
      languageLastUpdated,
      frameworkLastUpdated,
      toggleHelper,
      showHelper,
     } = this.props
    return (
      <div>
        <ScrollToTop />
        <Container>
          <Row>
            <Col className='mt-3'>
              <Alert color='info' isOpen={showHelper} toggle={toggleHelper}>
                Tap or click on a card to highlight.
                This will help me highlight information you care about (not yet implemented)
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col sm='12'>
              <div>
                <ErrorAlert error={languageGeneralError} />
                <h2>Languages</h2>
                <ReactCSSTransitionGroup transitionName='animatedContent'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                  {isFetchingLanguages &&
                    (
                      <Loading />
                    )}
                  {!isFetchingLanguages &&
                    (
                      <div>
                        <Form>
                          <FormGroup>
                            <Input
                              onChange={queryLanguages}
                              disabled={isQueryingLanguages}
                              type='search' name='search'
                              placeholder='Search for a programming language...' />
                          </FormGroup>
                        </Form>
                        <CardGroup
                          fetchAsync={fetchLanguagesAsync}
                          filteredData={filteredLanguageData}
                          fullData={languageData}
                          searchTerm={languageSearchTerm}
                          toggleSelectionAsync={toggleSelectionAsync}
                          groupName='Languages'
                        />
                      </div>
                    )}
                </ReactCSSTransitionGroup>
              </div>
            </Col>
          </Row>
          <LastUpdatedMuteText refreshTrigger={fetchLanguagesAsync} lastUpdated={languageLastUpdated} />
          <Row>
            <Col>
              <div>
                <ErrorAlert error={frameworkGeneralError} />
                <h2>Frameworks</h2>
                <ReactCSSTransitionGroup transitionName='animatedContent'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                  {isFetchingFrameworks &&
                    (
                      <Loading />
                    )}
                  {!isFetchingFrameworks &&
                    (
                      <div>
                        <Form>
                          <FormGroup>
                            <Input
                              onChange={queryFrameworks}
                              disabled={isQueryingFrameworks}
                              type='search' name='search'
                              placeholder='Search for a framework...' />
                          </FormGroup>
                        </Form>
                        <CardGroup
                          fetchAsync={fetchFrameworksAsync}
                          filteredData={filteredFrameworkData}
                          fullData={frameworkData}
                          searchTerm={frameworkSearchTerm}
                          groupName='Frameworks'
                          toggleSelectionAsync={toggleSelectionAsync}
                        />
                      </div>
                    )}
                </ReactCSSTransitionGroup>
              </div>
            </Col>
          </Row>
          <LastUpdatedMuteText refreshTrigger={fetchFrameworksAsync} lastUpdated={frameworkLastUpdated} />
          <PaginationItems prevLink='/' nextLink='/interests' />
        </Container>
      </div>
    )
  }
}

ExperienceView.propTypes = {
  fetchLanguagesAsync: PropTypes.func.isRequired,
  queryLanguages: PropTypes.func.isRequired,
  isFetchingLanguages: PropTypes.bool.isRequired,
  isQueryingLanguages: PropTypes.bool.isRequired,
  languageData: cardItemPropType,
  filteredLanguageData: cardItemPropType,
  languageSearchTerm: PropTypes.string,
  fetchFrameworksAsync: PropTypes.func.isRequired,
  queryFrameworks: PropTypes.func.isRequired,
  isFetchingFrameworks: PropTypes.bool.isRequired,
  isQueryingFrameworks: PropTypes.bool.isRequired,
  frameworkData: cardItemPropType,
  filteredFrameworkData: cardItemPropType,
  frameworkSearchTerm: PropTypes.string,
  toggleSelectionAsync: PropTypes.func.isRequired,
  languageGeneralError: PropTypes.object,
  frameworkGeneralError: PropTypes.object,
  languageLastUpdated: PropTypes.number,
  frameworkLastUpdated: PropTypes.number,
  toggleHelper: PropTypes.func,
  showHelper: PropTypes.bool,
}

ExperienceView.defaultProps = {
  fetchLanguagesAsync: () => { },
  queryLanguages: () => { },
  isFetchingLanguages: true,
  languageData: null,
  languageSearchTerm: '',
  fetchFrameworksAsync: () => { },
  queryFrameworks: () => { },
  isFetchingFrameworks: true,
  frameworkData: null,
  frameworkSearchTerm: '',
}

export default ExperienceView

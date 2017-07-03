import React, { Component } from 'react'
import './ContactView.scss'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import CardItem from '../../Experience/components/CardItem'
import { cardItemPropType } from '../../../utilities/propTypes'
import PaginationItems from '../../../components/shared/PaginationItems'
import ScrollToTop from '../../../layouts/PageLayout/components/ScrollToTop'
import Loading from '../../../components/shared/Loading'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ContactView extends Component {
  componentDidMount = () => !this.props.data && this.props.fetchContactAsync()
  render = () => {
    const { data, isFetching, fetchContactAsync, name, highlightedComponents } = this.props
    return (
      <Container>
        <ScrollToTop />
        {highlightedComponents.length > 0 && (
          <Row>
            <Col>
              <h2>Highlights</h2>
              <p>Hello {name}</p>
              <p>Checkout all the items you found interesting.</p>
              <div>
                {highlightedComponents.map(item => <CardItem
                  key={`card_highlight_${item.groupName}_${item.id}`}
                  groupName={item.groupName}
                  item={item} />)}
              </div>
            </Col>
          </Row>
        )}

        <Row onClick={fetchContactAsync}>
          <Col>
            <ReactCSSTransitionGroup transitionName='animatedContent'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {isFetching && (<Loading key={`section_html_contact`} />)}
              {!isFetching && (
                <div>
                  <div key={`section_html_contact`} className='content'>
                    {data.sections.map(section => (
                      <section key={`section_${section.id}`}>
                        <h2>{section.info.meta}</h2>
                        <div dangerouslySetInnerHTML={{ __html: section.info.body }} />
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </ReactCSSTransitionGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <PaginationItems prevLink='/education' />
          </Col>
        </Row>
      </Container>
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
  name: PropTypes.string,
  highlightedComponents: cardItemPropType,
}

ContactView.defaultProps = {
  data: null,
  isFetching: true,
  fetchContactAsync: () => { },
  name: 'guest',
  highlightedComponents: [],
}

export default ContactView

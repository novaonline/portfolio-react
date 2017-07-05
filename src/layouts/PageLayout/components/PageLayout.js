import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import './Animate.scss'
import NavigationBar from './NavigationBar'
import { Container, Row, Col } from 'reactstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class PageLayout extends Component {
  inputChange = (e) => this.setState({ inputName: e.target.value })
  componentWillMount = () => this.setState({ initialName: '' })
  handleNameSubmit = (e) => {
    e.preventDefault()
    this.props.submitName(this.state.inputName)
  }
  render = () => {
    const { isOpen, heroBackground, heroText, toggle,
      toggleOnNavClick, children, pathName, name, clearName, } = this.props
    return (
      <div>
        <NavigationBar isOpen={isOpen} toggle={toggle} toggleOnNavClick={toggleOnNavClick} />
        <div className='page-layout__viewport'>
          <div className='hero' style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className='hero-content'>
              <h1 className='hero-header inverse text-center'>
                {heroText}
              </h1>
              <ReactCSSTransitionGroup transitionName='namePrompt'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={-1}>
                {pathName === '/' && !name && (
                  <Container className='name-prompt'>
                    <Row>
                      <Col>
                        <form onSubmit={this.handleNameSubmit}>
                          <div className='input-styled text-center'>
                            <input
                              onChange={this.inputChange}
                              className='input'
                              type='text'
                              placeholder='Enter Name Here' />
                          </div>
                        </form>
                      </Col>
                    </Row>
                  </Container>
                )}
                {
                pathName === '/' && name && (
                  <Container className='name-prompt'>
                    <Row>
                      <Col>
                        <h2 onClick={clearName} className='inverse text-center'>Hello {name}</h2>
                      </Col>
                    </Row>
                  </Container>
                )
              }
              </ReactCSSTransitionGroup>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  }
}
PageLayout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  heroBackground: PropTypes.string.isRequired,
  heroText: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node,
  pathName: PropTypes.string.isRequired,
  name: PropTypes.string,
  submitName: PropTypes.func.isRequired,
  toggleOnNavClick: PropTypes.func.isRequired,
  clearName: PropTypes.func.isRequired,
}

PageLayout.defaultProps = {
  name: null,
}

export default PageLayout

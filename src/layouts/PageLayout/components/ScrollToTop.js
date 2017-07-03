import { Component } from 'react'
import scrollToWithAnimation from 'scrollto-with-animation'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  // TODO: Figure out a way to skip the animation if location has been visited
  // https://www.npmjs.com/package/scrollto-with-animation
  componentWillUnmount () {
    // console.log(this.props.routes.map(x => x.path).includes(this.props.location.pathname.trim('/')))
    scrollToWithAnimation(
      document.body,
      'scrollTop',
      0,
      500,
      'easeOutExpo' // http://gizma.com/easing/
    )
  }

  render () {
    return null
  }
}

export default withRouter(ScrollToTop)

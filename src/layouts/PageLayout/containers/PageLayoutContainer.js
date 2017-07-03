import { connect } from 'react-redux'
import { toggle, toggleOnNavClick, submitName } from '../modules/page-layout'
import { withRouter } from 'react-router'
/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import PageLayout from '../components/PageLayout'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

// ------------------------------------
// HERO Mappers
// ------------------------------------
const HERO_MAPPERS = {
  '/': { image: 'https://homepage.usask.ca/~eeq488/images/victoria-bridge.jpg', text: 'Introduction' },
  '/interests': { image: 'https://homepage.usask.ca/~eeq488/images/storm-mirror.jpg', text: 'Interests' },
  '/education': { image: 'https://homepage.usask.ca/~eeq488/images/salty-bets.jpg', text: 'Education' },
  '/experiences': { image: 'https://homepage.usask.ca/~eeq488/images/storm.jpg', text: 'Experiences' },
  '/projects': { image: 'http://homepage.usask.ca/~eeq488/images/bridge.jpg', text: 'Projects' },
  '/contact': { image: 'http://homepage.usask.ca/~eeq488/images/storm.jpg', text: 'Summary' },
}

const mapDispatchToProps = {
  toggle,
  toggleOnNavClick,
  submitName,
}

const mapStateToProps = (state) => ({
  isOpen: state.layout.isOpen,
  heroBackground: HERO_MAPPERS[state.location.pathname].image,
  heroText: HERO_MAPPERS[state.location.pathname].text,
  pathName: state.location.pathname,
  name: state.layout.name,
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageLayout))

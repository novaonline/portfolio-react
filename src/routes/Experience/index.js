import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path: 'experiences',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
      const Experiences = require('./containers/ExperienceContainer').default
      const languageReducer = require('./modules/languages').default
      const highlightedReducer = require('./modules/highlighted').default
      const frameworksReducer = require('./modules/frameworks').default
      injectReducer(store, { key: 'languages', reducer: languageReducer })
      injectReducer(store, { key: 'frameworks', reducer: frameworksReducer })
      injectReducer(store, { key: 'highlightedExperiences', reducer: highlightedReducer })
      next(null, Experiences)
    }, 'experiences')
  },
})

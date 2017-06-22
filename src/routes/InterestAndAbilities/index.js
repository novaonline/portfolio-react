import { injectReducer } from '../../store/reducers'
// Sync route definition
export default (store) => ({
  path: 'interests',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
      const Interests = require('./containers/InterestAndAbilitiesContainer').default
      const reducer = require('./modules/interest').default
      injectReducer(store, { key: 'interestContent', reducer })
      next(null, Interests)
    }, 'interests')
  }
})

import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path: 'contact',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
      const Contact = require('./containers/ContactContainer').default
      const reducer = require('./modules/contact').default
      injectReducer(store, { key: 'contactContent', reducer })
      next(null, Contact)
    }, 'contact')
  },
})

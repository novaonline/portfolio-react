import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'education',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Education = require('./containers/EducationContainer').default
      const reducer = require('./modules/education').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'educationContent', reducer })

      /*  Return getComponent   */
      cb(null, Education)

    /* Webpack named bundle   */
    }, 'education')
  }
})

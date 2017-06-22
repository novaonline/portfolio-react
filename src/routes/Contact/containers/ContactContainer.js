import { connect } from 'react-redux'
import ContactView from '../components/ContactView'
import { fetchContactAsync } from '../modules/contact'

const mapDispatchToProps = {
  fetchContactAsync,
}

const mapStateToProps = (state) => ({
  data: state.contactContent.data,
  isFetching: state.contactContent.isFetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactView)

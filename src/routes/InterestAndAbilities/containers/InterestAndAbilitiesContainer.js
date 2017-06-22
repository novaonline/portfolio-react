import { connect } from 'react-redux'
import InterestAndAbilities from '../components/InterestAndAbilitiesView'
import { fetchInterestAsync } from '../modules/interest'

const mapDispatchToProps = {
  fetchInterestAsync,
}
const mapStateToProps = (state) => ({
  data: state.interestContent.data,
  isFetching: state.interestContent.isFetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(InterestAndAbilities)

import { connect } from 'react-redux'
import { fetchEducation } from '../modules/education'
import EducationView from '../components/EducationView'

const mapDispatchToProps = {
  fetchEducation,
}

const mapStateToProps = (state) => {
  return ({
    educationContent: state.educationContent.data,
    isFetching: state.educationContent.isFetching,
    error: state.educationContent.error,
    lastUpdated: state.educationContent.lastUpdated,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationView)

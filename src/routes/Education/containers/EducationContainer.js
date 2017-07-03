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
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationView)

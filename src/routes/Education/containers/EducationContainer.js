import { connect } from 'react-redux'
import { fetchEducation } from '../modules/education'

import EducationView from '../components/EducationView'

const mapDispatchToProps = {
  fetchEducation,
}

const mapStateToProps = (state) => ({
  educationContent: state.educationContent.educationContent,
  isFetching: state.educationContent.isFetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(EducationView)

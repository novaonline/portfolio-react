import { connect } from 'react-redux'
import { fetchLanguages } from '../modules/language'

import LanguageList from '../components/LanguageList'

const mapDispatchToProps = {
  handleTitle: () => fetchLanguages()
}

const mapStateToProps = (state) => ({
  language: state.language
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageList)

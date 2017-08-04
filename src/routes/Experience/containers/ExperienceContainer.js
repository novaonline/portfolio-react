import { connect } from 'react-redux'
import ExperienceView from '../components/ExperienceView'
import SvgMapping from '../../../utilities/experience-svg-mapping'
import {
  fetchLanguagesAsync,
  queryLanguages,
  queryLanguageClear,
} from '../modules/languages'

import {
  fetchFrameworksAsync,
  queryFrameworks,
  queryFrameworkClear,
} from '../modules/frameworks'

import {
  toggleSelectionAsync,
  toggleHelper,
} from '../modules/highlighted'

const mapDispatchToProps = {
  fetchLanguagesAsync,
  queryLanguages,
  queryLanguageClear,
  fetchFrameworksAsync,
  queryFrameworks,
  queryFrameworkClear,
  toggleSelectionAsync,
  toggleHelper,
}

// def should have broken experience into different components
const mapStateToProps = (state) => {
  const result = {
    isFetchingLanguages: state.languages.isFetching,
    isQueryingLanguages: state.languages.isQuerying,
    languageSearchTerm: state.languages.searchTerm,
    isFetchingFrameworks: state.frameworks.isFetching,
    isQueryingFrameworks: state.frameworks.isQuerying,
    frameworkSearchTerm: state.frameworks.searchTerm,
    languageGeneralError: state.languages.error,
    frameworkGeneralError: state.frameworks.error,
    languageLastUpdated: state.languages.lastUpdated,
    frameworkLastUpdated: state.frameworks.lastUpdated,
    showHelper: state.highlightedExperiences.showHelper,
  }
  if (state.languages.data) {
    result.languageData = Object.assign({}, state.languages.data)
    Object.keys(result.languageData).forEach(key => {
      const language = result.languageData[key]
      // eslint-disable-next-line no-unneeded-ternary
      language.isSelected = state.highlightedExperiences.data[`${language.id}_Languages`] ? true : false
      language.info.imageUrl = SvgMapping[`${language.id}_Languages`]
    })
  }
  if (state.languages.filteredData) {
    result.filteredLanguageData = Object.assign({}, state.languages.filteredData)
    Object.keys(result.filteredLanguageData).forEach(key => {
      const language = result.filteredLanguageData[key]
      // eslint-disable-next-line no-unneeded-ternary
      language.isSelected = state.highlightedExperiences.data[`${language.id}_Languages`] ? true : false
      language.info.imageUrl = SvgMapping[`${language.id}_Languages`]
    })
  }
  if (state.frameworks.data) {
    result.frameworkData = Object.keys(state.frameworks.data).map(key => {
      const framework = state.frameworks.data[key]
      // eslint-disable-next-line no-unneeded-ternary
      framework.isSelected = state.highlightedExperiences.data[`${framework.id}_Frameworks`] ? true : false
      return framework
    })
  }
  if (state.frameworks.filteredData) {
    result.filteredFrameworkData = Object.keys(state.frameworks.filteredData).map(key => {
      const framework = state.frameworks.data[key]
      // eslint-disable-next-line no-unneeded-ternary
      framework.isSelected = state.highlightedExperiences.data[`${framework.id}_Frameworks`] ? true : false
      return framework
    })
  }
  return result
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceView)

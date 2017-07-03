import { connect } from 'react-redux'
import ContactView from '../components/ContactView'
import { fetchContactAsync } from '../modules/contact'

const mapDispatchToProps = {
  fetchContactAsync,
}

const mapStateToProps = (state) => {
  const result = {
    data: state.contactContent.data,
    isFetching: state.contactContent.isFetching,
    name: state.layout.name,
  }
  const group = []
  if (state.highlightedExperiences) {
    Object.keys(state.highlightedExperiences.data).forEach(key => {
      const x = state.highlightedExperiences.data[key]
      const y = state[x.groupName.toLowerCase()].data[`id-${x.id}`]
      y.groupName = x.groupName
      group.push(y)
    })
    result.highlightedComponents = group
  }
  return result
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactView)

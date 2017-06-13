import React from 'react'
import PropTypes from 'prop-types'

const LanguageList = ({ language, handleTitle }) => (
  <div>
    <button className='btn btn-primary' onClick={handleTitle}>
            Handle Title
        </button>
    <p>{language}</p>
  </div>
)
LanguageList.propTypes = {
  language: PropTypes.string.isRequired,
  handleTitle: PropTypes.func.isRequired,
}

export default LanguageList

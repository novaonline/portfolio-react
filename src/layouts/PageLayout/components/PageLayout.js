import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import NavigationBar from './NavigationBar'

export const PageLayout = ({ isOpen, heroBackground, heroText, toggle, children }) => (
  <div>
    <NavigationBar isOpen={isOpen} toggle={toggle} />
    <div className='page-layout__viewport'>
      <div className='hero' style={{ backgroundImage:`url(${heroBackground})` }}>
        <div className='hero-content'>
          <h1 className='hero-header inverse text-center'>
            {heroText}
          </h1>
        </div>
      </div>
      {children}
    </div>

  </div>
)
PageLayout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  heroBackground: PropTypes.string.isRequired,
  heroText: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default PageLayout

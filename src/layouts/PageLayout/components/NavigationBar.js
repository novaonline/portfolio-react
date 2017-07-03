import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import GithubLogo from '../../../components/shared/GithubLogo'
import LinkedinLogo from '../../../components/shared/LinkedInLogo'

const NavigationBar = ({ isOpen, toggle, toggleOnNavClick, }) => (
  <Navbar sticky='top' color='inverse' inverse toggleable='sm'>
    <NavbarToggler onClick={toggle} />
    <div className='navbar-toggler-right'>
      <Nav>
        <NavItem>
          <Link
            href='//www.github.com/novaonline'
            className='nav-link'
            activeClassName='page-layout__nav-item--active'>
            <GithubLogo fill='#fff' style={{ width: 20 }} />
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href='//www.linkedin.com/in/equagrainejr'
            className='nav-link'
            activeClassName='page-layout__nav-item--active'>
            <LinkedinLogo fill='#fff' style={{ width: 20 }} />
          </Link>
        </NavItem>
      </Nav>
    </div>
    <Collapse isOpen={isOpen} navbar>
      <NavbarBrand tag={IndexLink} to='/' onClick={toggleOnNavClick} className='navbar-brand'>
        Portfolio
        </NavbarBrand>
      <Nav className='mr-auto' navbar>
        <NavItem>
          <Link
            onClick={toggleOnNavClick}
            to='/experiences'
            className='nav-link'
            activeClassName='page-layout__nav-item--active'>
            Experience
          </Link>
        </NavItem>
        <NavItem>
          <Link
            onClick={toggleOnNavClick}
            to='/interests'
            className='nav-link'
            activeClassName='page-layout__nav-item--active'>
            Interests
            </Link>
        </NavItem>
        <NavItem>
          <Link
            onClick={toggleOnNavClick}
            to='/education'
            className='nav-link'
            activeClassName='page-layout__nav-item--active'>
            Education
            </Link>
        </NavItem>
        <NavItem>
          <Link
            onClick={toggleOnNavClick}
            to='/contact'
            className='nav-link'
            activeClassName='page-layout__nav-item--active'>
            Summary
            </Link>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
)

NavigationBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleOnNavClick: PropTypes.func.isRequired,
}
export default NavigationBar

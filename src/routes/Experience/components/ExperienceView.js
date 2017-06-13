import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router'
import './ExperienceView.scss'
import LanguageCard from './LanguageCard'

const ExperienceView = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='content'>
              <h2>Languages</h2>
              <LanguageCard />
              <h2>Frameworks</h2>
              <p>Work in progress</p>
              <h2>Libraries</h2>
              <p>Work in progress</p>
            </div>
            <div className='text-center'>
              <Link to='/education'>
                <Button color='link'>&laquo; Education</Button>
              </Link>
              <Link to='/projects'>
                <Button color='link'>Projects &raquo;</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceView

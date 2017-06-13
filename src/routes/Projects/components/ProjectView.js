import React from 'react'
import './ProjectView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

const ProjectView = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='content'>
            Work in Progress

            </div>
            <div className='text-center'>
              <Link to='/experiences'>
                <Button color='link'>&laquo; Experiences</Button>
              </Link>
              <Link to='/contact'>
                <Button color='link'>Contact &raquo;</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectView

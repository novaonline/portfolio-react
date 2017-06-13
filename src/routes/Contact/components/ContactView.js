import React from 'react'
import './ContactView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

const ContactView = () => {
  return (
    <div>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='content'>
              <h2>You can reach me anytime.</h2>
              <p>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>Email (Usask)</td>
                      <td><a href='mailto:emmanuel.quagraine@usask.ca'>emmanuel.quagraine@usask.ca</a></td>
                    </tr>
                    <tr>
                      <td>Email (GMail)</td>
                      <td><a href='mailto:modern.nova.online@gmail.com'>modern.nova.online@gmail.com</a></td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
            <div className='text-center'>
              <Link to='/projects'>
                <Button color='link'>&laquo; Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactView

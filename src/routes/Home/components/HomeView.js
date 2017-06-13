import React from 'react'
import './HomeView.scss'
import { Button } from 'reactstrap'
import { Link } from 'react-router'

export const HomeView = () => (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <section className='content'>
            <h2>Hello, my name is Emmanuel</h2>
            <p>
              As a student at the University of Saskatchewan, I've been given 50,000 kb of space under this domain and
              I've decided to take advantage of this space to present myself
              as a Computer Scientist ready for an exciting career developing problem solving,
              working with a team, and making life easier for the clients who purchase anything I helped develop.
            </p>
            <p>
              To quickly introduce myself (for those who may not have that much time to read everything below),
              I am a young open-minded individual who has been exposed to many programming languages
              and Computer Science concepts.
              I am now eager to apply what I've learnt to
              real world programs, applications, or other computer-related goods and services.
              I've always loved Computers (at both hardware and software level) and
              I always find myself deep in thought about how a client may actually use the good,
              or apply the service. There is so much more I want to say, but I promised to make it quick.
              If you have the time, check out the pages.
            </p>
            <div className='text-center'>
              <Link to='/interests'>
                <Button color='link'>Interests &raquo;</Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
